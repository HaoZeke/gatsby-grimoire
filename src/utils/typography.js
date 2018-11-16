import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'
import CodePlugin from 'typography-plugin-code'

kirkhamTheme.baseFontSize = '14px'
kirkhamTheme.baseLineHeight = 1.45
kirkhamTheme.scaleRatio = 2.25
kirkhamTheme.plugins = [
  new CodePlugin(),
]
const typography = new Typography(kirkhamTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
