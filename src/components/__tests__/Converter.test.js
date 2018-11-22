import * as testUtils from '../../testUtils'
import { Simulate } from 'react-testing-library'
import Converter from '../Converter'
import React from 'react'

describe('<Converter/>', () => {
  it('displays a "waiting..." message until the first converter status is received', () => {
    const { queryByTestId, store, unmount } = testUtils.reduxRender(
      <Converter />
    )
    expect(queryByTestId('waiting')).not.toBeNull()
    store.dispatch(converterStatusUpdated(dummyStatus()))
    expect(queryByTestId('waiting')).toBeNull()
    unmount()
  })

  describe('If MET conversions ARE ALLOWED', () => {
    it('opens Convert drawer when Convert button is clicked', () => {
      const { queryByTestId, getByTestId, unmount } = testUtils.reduxRender(
        <Converter />,
        getInitialState(dummyStatus(), inDailyAuction())
      )
      const btn = testUtils.withDataset(getByTestId('convert-btn'), 'modal')
      expect(queryByTestId('convert-drawer')).toBeNull()
      Simulate.click(btn)
      expect(queryByTestId('convert-drawer')).not.toBeNull()
      unmount()
    })

    describe('if we are on the INITIAL AUCTION', () => {
      it('displays stats', () => {
        const { queryByTestId, unmount } = testUtils.reduxRender(
          <Converter />,
          getInitialState(dummyStatus(), inInitialAuction())
        )
        expect(queryByTestId('stats')).not.toBeNull()
        unmount()
      })

      it('Convert button is disabled', () => {
        const { getByTestId, queryByTestId, unmount } = testUtils.reduxRender(
          <Converter />,
          getInitialState(dummyStatus(), inInitialAuction())
        )
        const btn = testUtils.withDataset(getByTestId('convert-btn'), 'modal')
        expect(queryByTestId('convert-drawer')).toBeNull()
        Simulate.click(btn)
        expect(queryByTestId('convert-drawer')).toBeNull()
        unmount()
      })

      it('Convert button shows a tooltip when hovered', () => {
        const { getByTestId, unmount } = testUtils.reduxRender(
          <Converter />,
          getInitialState(dummyStatus(), inInitialAuction())
        )
        expect(getByTestId('convert-btn').getAttribute('data-rh')).toBe(
          'Conversions are disabled during Initial Auction'
        )
        unmount()
      })
    })

    describe('if connectivity is lost', () => {
      it('Convert button is disabled', () => {
        const {
          queryByTestId,
          getByTestId,
          store,
          unmount
        } = testUtils.reduxRender(
          <Converter />,
          getInitialState(dummyStatus(), inDailyAuction())
        )
        store.dispatch(goOffline())
        const btn = testUtils.withDataset(getByTestId('convert-btn'), 'modal')
        expect(queryByTestId('convert-drawer')).toBeNull()
        Simulate.click(btn)
        expect(queryByTestId('convert-drawer')).toBeNull()
        unmount()
      })

      it('Convert button shows a tooltip when hovered', () => {
        const { getByTestId, store, unmount } = testUtils.reduxRender(
          <Converter />,
          getInitialState(dummyStatus(), inDailyAuction())
        )
        expect(getByTestId('convert-btn').getAttribute('data-rh')).toBeNull()
        store.dispatch(goOffline())
        expect(getByTestId('convert-btn').getAttribute('data-rh')).toBe(
          "Can't convert while offline"
        )
        unmount()
      })
    })
  })
})

function converterStatusUpdated(payload = {}) {
  return {
    type: 'mtn-converter-status-updated',
    payload
  }
}

function goOffline() {
  return {
    type: 'connectivity-state-changed',
    payload: { ok: false }
  }
}

const dummyStatus = (overrides = {}) => ({
  availableEth: '100',
  availableMtn: '100',
  currentPrice: '10',
  ...overrides
})

const inInitialAuction = (overrides = {}) => ({
  nextAuctionStartTime: testUtils.inOneWeek(),
  tokenRemaining: '1',
  currentAuction: '0',
  currentPrice: '33000000000',
  genesisTime: testUtils.oneHourAgo(),
  ...overrides
})

const inDailyAuction = (overrides = {}) => ({
  nextAuctionStartTime: testUtils.inOneHour(),
  tokenRemaining: '1',
  currentAuction: '10',
  currentPrice: '33000000000',
  genesisTime: testUtils.twoWeeksAgo(),
  ...overrides
})

function getInitialState(converterStatus = null, auctionStatus = null) {
  return testUtils.getInitialState({
    converter: { status: converterStatus },
    auction: { status: auctionStatus }
  })
}
