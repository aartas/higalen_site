import { theme } from "../constants/variables"

const configProviderTheme = {
  token: {
    fontFamily: theme.font.fontFamily,
    colorPrimary: theme.colors.primary,
    fontSize: 12,
    borderRadius: 4,
    lineWidthFocus: 2,
  },

  components: {
    Dropdown: {
      controlItemBgActive: '#f2f2f2',
      controlItemBgActiveHover: '#f2f2f2',
      controlItemBgHover: '#f2f2f2',
    },
    Form: {
      itemMarginBottom: '12px',
      // verticalLabelMargin: '0px',
      // verticalLabelPadding: '0px',
      labelColor: '#7A7A7B',
      fontSize: 12,
    },
    Button: {
      boxShadow: 'none',
      outline: 'none'
    },
    Table: {
      cellPaddingBlockSM: 2,
    },
    Divider: {
      marginLG: 12,
      margin: 8
    },
    Input: {
      outline: 'none',
      boxShadow: 'none',
      colorBorder: '#7a7a7b59',
      hoverBorderColor: '#222023',
      activeBorderColor: '#222023',
    },
    Select:{
      optionSelectedBg:'#f2f2f2',    
      colorBorder: '#7a7a7b59',
      hoverBorderColor: '#222023',
      activeBorderColor: '#222023',
    },
    Drawer: {
      colorBgMask: 'rgba(0,0,0,0.15)'
    },
  },
}

export default configProviderTheme
