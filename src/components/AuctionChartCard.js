import React, { Component } from 'react'
import { ChartCard } from './common'
import shrinkArray from 'shrink-array'
import { connect } from 'react-redux'
import config from '../config'
import moment from 'moment'
import last from 'shrink-array/last'

const sevenDaysAgo = () =>
  moment()
    .subtract({ days: 7 })
    .unix()

class AuctionChartCard extends Component {
  state = {
    chartStatus: 'pending',
    chartData: []
  }

  // eslint-disable-next-line arrow-body-style
  retrieveData = () => {
    this.setState({ chartStatus: 'pending', chartData: [] })

    const from = sevenDaysAgo()
    const now = moment().unix()

    fetch(`${config.MET_API_URL}/history?from=${from}&to=${now}`)
      .then(response => response.json())
      .then(chartData => {
        if (!this._isMounted) return
        this.setState({
          chartStatus: 'success',
          chartData: chartData.map(point => ({
            x: point.timestamp,
            y: parseInt(point.currentAuctionPrice, 10)
          }))
        })
      })
      .catch(() => {
        if (!this._isMounted) return
        this.setState({ chartStatus: 'failure', chartData: [] })
      })
  }

  componentDidMount() {
    this._isMounted = true
    this.retrieveData()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  static getDerivedStateFromProps(props, state) {
    const point = {
      y: parseInt(props.auction.currentPrice, 10),
      x: moment().unix()
    }
    const from = sevenDaysAgo()
    const newChartData = state.chartData.concat(point).filter(p => p.x >= from)

    return {
      chartData:
        newChartData.length > 500
          ? shrinkArray(newChartData, 500, last)
          : newChartData
    }
  }

  render() {
    return (
      <ChartCard
        chartStatus={this.state.chartStatus}
        chartLabel="Auction Price (last 7 days)"
        chartData={this.state.chartData}
        onRetry={this.retrieveData}
      />
    )
  }
}

const mapStateToProps = state => ({
  auction: state.auction.status
})

export default connect(mapStateToProps)(AuctionChartCard)