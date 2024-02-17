import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig(
  {
    name: ModuleScope.HomePage,
    modules: [ModuleScope.Authentication],
    dependencies: {},
    exposes: {
      "./HomePage": "./src/HomePage.tsx",
    },
  },
  true
);

export default config;
