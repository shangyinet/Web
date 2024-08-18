import { theme, ThemeConfig } from "antd";

const algorithm = theme.defaultAlgorithm;
export const themeConfig: ThemeConfig = {
  algorithm: algorithm,
  // token: {
  //   colorPrimary: algorithm == theme.defaultAlgorithm ? "red" : "green",

  // },
  // 部件
  components: {
    Input:{
      // hoverBorderColor:'red',
      // colorBgBase:''
    }
    // Menu: {
    //   itemColor: "green",
    //   itemSelectedColor: "yellow",
    //   itemBorderRadius: 0,
    //   colorPrimary:'blue',
    // },
  },
};
