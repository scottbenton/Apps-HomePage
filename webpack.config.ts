import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig({
  name: ModuleScope.HomePage,
  dependencies: {},
  exposes: {
    "./HomePage": "./src/HomePage.tsx",
  },
});

export default config;
