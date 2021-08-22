# Structure

```
.
├─ docs/ // documentation folder
│  ├── .vuepress/ // VuePress
│  │   ├─ stylus/ // import of fonts and customization of documentation
│  │   │  └─ palette.styl
│  │   ├─ config.js // configuration
│  │   └─ enhanceApp.js // improvements - installation of library components
│  ├─ components/ // components documentation folder
│  │  ├─ link.md
│  │  └─ ...
│  ├─ constants/ // library documentation folder
│  │  ├─ breakpoints.md
│  │  ├─ colors.md
│  │  ├─ others.md
│  │  ├─ stylebase.md
│  │  └─ typography.md
│  ├─ sanbox/ // sandbox view
│  │  └─ sandbox.md
│  ├─ links.md // useful reading links
│  ├─ README.md // homepage
│  ├─ start.md // getting started
│  └─ structure.md // structure
├─ src/ // source folder
│  ├─ components/
│  │  ├─ Link
│  │  │  ├─ index.js
│  │  │  └─ Link.vue
│  │  ├─ Sandbox
│  │  │  ├─ index.js
│  │  │  └─ Sandbox.vue
│  │  ├─ Tests
│  │  │  └─ ...
│  │  └─ ...
│  ├─ mixins/
│  │  ├─ resize.js // adaptive to components
│  │  └─ ...
│  ├─ static/ // after build fonts will be copied here
│  │  └─ fonts/
│  │     └─ ...
│  ├─ stylus/
│  │  ├─ core
│  │  │  ├─ _animations.styl // keyframes and Vue animationss classes
│  │  │  └─ _base.styl // normalize
│  │  ├─ libs
│  │  │  └─ ...
│  │  ├─ utils
│  │  │  ├─ _mixins.styl
│  │  │  ├─ _placeholders.styl
│  │  │  ├─ _typography.styl // Use one, only one, Karl, a universal mixin for all cases!
│  │  │  └─ _variables.styl
│  │  └─ _stylebase.styl // main file of stylus 
│  ├─ utils/ // scripts
│  │  ├─ constants.js // javascript constants
│  │  ├─ screen-helper.js // adaptive viewport
│  │  └─ ...
│  └─ main.js // library connection
├─ .browserslistrc // configuration of supported browsers
├─ .eslintrc.js // linter configuration
├─ .gitignore // git ignore
├─ .prettierrc // prettier configuration
├─ babel.config.js // babel configuration
├─ colors.jpg // image for README
├─ package.json // project configuration
└─ README.md
```
