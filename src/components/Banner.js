import styled from 'styled-components'
import React from 'react'

const Container = styled.svg`
  overflow: visible;
`

export default class Banner extends React.Component {
  render() {
    return (
      <Container width="260" height="64" viewBox="0 0 260 64">
        <defs>
          <linearGradient id="c" x1="50%" x2="50%" y1="2.421%" y2="100%">
            <stop offset="0%" stopColor="#7E61F8" />
            <stop offset="100%" stopColor="#6E4FF2" />
          </linearGradient>
          <rect id="b" width="64" height="64" rx="24" />
          <filter
            id="a"
            width="425%"
            height="425%"
            x="-162.5%"
            y="-162.5%"
            filterUnits="objectBoundingBox"
          >
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="24"
            />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
              values="0 0 0 0 0.494117647 0 0 0 0 0.380392157 0 0 0 0 0.97254902 0 0 0 0.5 0"
            />
            <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur
              in="shadowOffsetOuter2"
              result="shadowBlurOuter2"
              stdDeviation="8"
            />
            <feComposite
              in="shadowBlurOuter2"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter2"
            />
            <feColorMatrix
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
              values="0 0 0 0 0.494117647 0 0 0 0 0.380392157 0 0 0 0 0.97254902 0 0 0 0.422526042 0"
            />
            <feOffset in="SourceAlpha" result="shadowOffsetOuter3" />
            <feGaussianBlur
              in="shadowOffsetOuter3"
              result="shadowBlurOuter3"
              stdDeviation="8"
            />
            <feComposite
              in="shadowBlurOuter3"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter3"
            />
            <feColorMatrix
              in="shadowBlurOuter3"
              result="shadowMatrixOuter3"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
              <feMergeNode in="shadowMatrixOuter3" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g fill="#7E61F8">
            <path d="M180.397 20.457c-4.157 0-7.67 3.46-7.67 7.558v9.082c0 .857.83 1.667 1.706 1.667.898 0 1.629-.747 1.629-1.667v-9.082c.041-2.37 1.945-4.224 4.335-4.224 2.367 0 4.223 1.856 4.223 4.224v9.082a1.69 1.69 0 0 0 1.665 1.667c.889 0 1.668-.778 1.668-1.667v-9.082c0-4.167-3.389-7.558-7.556-7.558M231.019 20.457c-2.382 0-4.55 1.14-5.968 2.881a7.538 7.538 0 0 0-5.923-2.88c-4.158 0-7.671 3.46-7.671 7.557v9.082c0 .857.828 1.667 1.706 1.667.897 0 1.628-.747 1.628-1.667v-9.082c.041-2.37 1.946-4.224 4.337-4.224 2.366 0 4.219 1.853 4.221 4.22v9.086c0 .01.004.022.004.032.018.89.77 1.635 1.663 1.635l.02-.002.018.002c.899 0 1.629-.747 1.629-1.667v-9.082c.04-2.37 1.945-4.224 4.336-4.224 2.366 0 4.222 1.856 4.222 4.224v9.082a1.69 1.69 0 0 0 1.665 1.667c.889 0 1.668-.778 1.668-1.667v-9.082c0-4.167-3.389-7.558-7.555-7.558M161.173 35.525a5.834 5.834 0 0 1-5.826-5.828 5.833 5.833 0 0 1 5.826-5.829A5.834 5.834 0 0 1 167 29.697a5.835 5.835 0 0 1-5.827 5.828m0-14.897c-5.006 0-9.064 4.06-9.064 9.069 0 5.008 4.058 9.067 9.064 9.067 5.007 0 9.065-4.06 9.065-9.067 0-5.008-4.058-9.069-9.065-9.069M199.758 35.525a5.835 5.835 0 0 1-5.827-5.828 5.834 5.834 0 0 1 5.827-5.829 5.833 5.833 0 0 1 5.826 5.829 5.833 5.833 0 0 1-5.826 5.828m0-14.897c-5.007 0-9.065 4.06-9.065 9.069 0 5.008 4.058 9.067 9.065 9.067 5.006 0 9.065-4.06 9.065-9.067 0-5.008-4.059-9.069-9.065-9.069M149.642 20.213c-2.804 0-5.075.914-6.752 2.717-3.118 3.351-2.924 8.687-2.892 9.284v4.864c0 .93.757 1.686 1.687 1.686.928 0 1.685-.756 1.685-1.686l-.004-5.04c-.004-.03-.246-4.404 1.992-6.81 1.029-1.106 2.43-1.643 4.284-1.643.93 0 1.686-.757 1.686-1.686 0-.93-.756-1.686-1.686-1.686M136.934 20.095h-3.413V17.62a1.619 1.619 0 1 0-3.24 0l-.039 16.513c-.035 1.412.753 4.198 4.003 4.846a1.633 1.633 0 0 0 .64-3.205c-1.24-.248-1.376-1.468-1.377-1.836l.013-10.603h3.413a1.62 1.62 0 0 0 0-3.239M124.39 27.578a.707.707 0 0 1-.574.296h-9.705a.71.71 0 0 1-.57-.29.686.686 0 0 1-.102-.618c.572-1.805 2.345-3.914 5.46-3.914 3.837 0 5.183 2.726 5.583 3.898a.694.694 0 0 1-.093.628m-5.49-7.502c-4.986 0-9.073 4.192-9.11 9.347.038 5.199 4.04 9.304 9.111 9.341 2.7 0 4.894-.806 6.7-2.467.211-.192.34-.417.392-.67.03-.114.05-.233.05-.357 0-.808-.691-1.463-1.546-1.463-.38 0-.723.134-.993.349a3.86 3.86 0 0 0-.358.278c-.99.755-2.707 1.174-4.277 1.041-1.482-.127-3.111-.894-3.959-1.865-.533-.5-.979-1.281-1.255-2.177l.007-.004c-.236-.867.65-.965.65-.965l.002-.002h11.876c.904 0 1.573-.5 1.665-1.241l.036-.116c-.005.008.002-.038.002-.19v-.193c-.298-5.001-4.08-8.646-8.994-8.646M244.43 26.966c.572-1.806 2.346-3.914 5.46-3.914 3.837 0 5.184 2.726 5.583 3.898a.694.694 0 0 1-.093.628.707.707 0 0 1-.573.296h-9.704a.71.71 0 0 1-.57-.29.686.686 0 0 1-.103-.618m5.462 11.798c2.7 0 4.893-.807 6.7-2.467.21-.192.339-.417.39-.67.032-.115.052-.233.052-.357 0-.808-.693-1.463-1.546-1.463-.38 0-.724.134-.993.35-.117.068-.358.277-.358.277-.991.755-2.708 1.174-4.277 1.041-1.483-.127-3.112-.894-3.96-1.865-.533-.5-.978-1.282-1.255-2.178l.008-.003c-.236-.867.65-.965.65-.965v-.002h11.877c.904 0 1.573-.499 1.665-1.241l.035-.115c-.004.007.003-.04.003-.19v-.194c-.298-5.002-4.08-8.647-8.994-8.647-4.985 0-9.072 4.193-9.109 9.347.038 5.2 4.04 9.306 9.112 9.342M99.561 20.457c-2.382 0-4.549 1.14-5.968 2.881a7.536 7.536 0 0 0-5.922-2.88c-4.157 0-7.671 3.46-7.671 7.557v9.082c0 .857.829 1.667 1.706 1.667.897 0 1.628-.747 1.628-1.667v-9.082c.04-2.37 1.946-4.224 4.337-4.224 2.365 0 4.219 1.853 4.221 4.22v9.086c0 .01.004.022.004.032.018.89.77 1.635 1.662 1.635l.02-.002.018.002c.9 0 1.63-.747 1.63-1.667v-9.082c.04-2.37 1.946-4.224 4.335-4.224 2.367 0 4.222 1.856 4.222 4.224v9.082a1.69 1.69 0 0 0 1.666 1.667c.888 0 1.667-.778 1.667-1.667v-9.082c0-4.167-3.388-7.558-7.555-7.558" />
          </g>
          <path
            fill="#FFF"
            d="M211.863 52.724h2.526l-4.1 10.459h-2.257l-2.588-6.856-2.526 6.856h-2.278l-4.1-10.46h2.65l2.693 7.374 2.712-7.373h1.864l2.712 7.435 2.692-7.435zm14.163 0v10.459h-2.547v-1.678a3.36 3.36 0 0 1-1.366 1.357c-.594.324-1.27.487-2.03.487-.91 0-1.718-.221-2.422-.663-.704-.442-1.25-1.07-1.636-1.885-.386-.815-.58-1.76-.58-2.837 0-1.077.197-2.034.59-2.869.394-.835.943-1.484 1.647-1.947.704-.462 1.504-.694 2.402-.694.759 0 1.435.162 2.029.487a3.36 3.36 0 0 1 1.366 1.357v-1.574h2.547zm-5.238 8.595c.856 0 1.518-.297 1.987-.89.47-.594.704-1.43.704-2.507 0-1.104-.234-1.954-.704-2.547-.469-.594-1.138-.891-2.008-.891-.856 0-1.522.307-1.998.922-.476.614-.715 1.467-.715 2.558 0 1.077.239 1.905.715 2.485.476.58 1.149.87 2.019.87zm8.816 1.864V47.939h2.568v15.244h-2.568zm6.166 0V47.939h2.568v15.244h-2.568zm14.557-5.095h-7.206c.055 1.118.335 1.943.839 2.475.503.532 1.252.797 2.246.797 1.146 0 2.209-.372 3.189-1.118l.745 1.781c-.496.4-1.107.722-1.832.963a6.93 6.93 0 0 1-2.205.363c-1.712 0-3.058-.484-4.038-1.45-.98-.967-1.47-2.292-1.47-3.977 0-1.063.214-2.009.642-2.837a4.74 4.74 0 0 1 1.801-1.937c.773-.462 1.65-.694 2.63-.694 1.436 0 2.57.466 3.406 1.398.835.932 1.253 2.213 1.253 3.842v.394zm-4.597-3.77c-.69 0-1.253.204-1.688.611-.434.408-.714.998-.838 1.771h4.866c-.083-.787-.321-1.38-.715-1.781-.393-.4-.935-.6-1.625-.6zm10.084.352v4.681c0 1.23.573 1.844 1.719 1.844a3.66 3.66 0 0 0 1.035-.166v2.05c-.456.166-1.008.249-1.657.249-1.187 0-2.098-.331-2.733-.994-.635-.663-.952-1.616-.952-2.858V54.67h-2.009v-1.946h2.009v-2.548l2.588-.87v3.418h2.775v1.946h-2.775z"
          />
          <g>
            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
            <use fill="url(#c)" xlinkHref="#b" />
            <rect
              width="62"
              height="62"
              x="1"
              y="1"
              stroke="#FFF"
              strokeOpacity=".045"
              strokeWidth="2"
              rx="24"
            />
            <path
              fill="#FFF"
              d="M31.825 23.777C30.01 21.48 27.205 20 24.06 20 18.608 20 14 24.537 14 29.907v11.908C14 42.938 15.087 44 16.237 44c1.177 0 2.135-.98 2.135-2.185V29.907c.054-3.107 2.552-5.536 5.687-5.536 3.102 0 5.533 2.43 5.536 5.531v11.913C29.623 43.022 30.61 44 31.779 44c1.23 0 2.188-.98 2.188-2.185V29.907c.053-3.107 2.55-5.536 5.684-5.536 3.104 0 5.537 2.432 5.537 5.536v11.908c0 1.183 1 2.185 2.184 2.185 1.165 0 2.187-1.02 2.187-2.185V29.907c0-5.462-4.443-9.907-9.908-9.907-3.123 0-5.965 1.494-7.826 3.777z"
            />
          </g>
        </g>
      </Container>
    )
  }
}