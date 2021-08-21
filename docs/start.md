# Getting Started

## Installation

Скачайте код <span class="nowrap">[ui-library-starter](https://github.com/ushliypakostnik/ui-library-starter)</span> и оформите его в отдельный репозиторий. При выборе имени для нового репозитория необходимо сразу убедиться в том, что оно не занято на <span class="nowrap">[npmjs.com](https://www.npmjs.com/)</span>. Пусть это будет <code class="nowrap">ui-library-starter-test</code>.

Или, в случае, если вы не планируете менять стиль проекта под свои собственные гайды, но, собираетесь поиграться или даже внести вклад в его развитие, например, предложив еще какие-то важные компоненты - сделайте форк, конечно же. Дальнейшие иструкции относятся к первому случаю - пилим свежую либу с кастомным стилем под конкретные задачи - в этом случае многие могут захотеть удалить эту документацию и почти все компоненты, чтобы не выполнять лишнюю кастомизацию.

```
$ npm install
```

## Customization

### README.md

Поправьте первую строчку в <code class="nowrap">@/README.md</code>:

```
# Ui-library-starter test project
```

### package.json

Далее в <code class="nowrap">@/package.json</code> вам необходимо крайне аккуратно переписать актуальной информацией следующие поля, ничего не пропустив:

```json
{
  "name": "ui-library-starter-test",
  "description": "UI Library Starter Demonstration",
  "version": "0.1.0",

  "main": "dist/ui-library-starter-test.umd.min.js",
  "unpkg": "dist/ui-library-starter-test.umd.min.js",
  "jsdelivr": "dist/ui-library-starter-test.umd.min.js",

  "scripts": {
    "build": "rimraf ./src/static && cp -r ./docs/.vuepress/public ./src/static && vue-cli-service build --target lib --name ui-library-starter-test src/main.js"
  },

  "author": "Levon Gambaryan",
  "license": "MIT",

  "homepage": "",
  "repository": {
    "type": "git",
    "url": "https://github.com/ushliypakostnik/ui-library-starter-test"
  },
  "bugs": {
    "url": "https://github.com/ushliypakostnik/ui-library-starter-test/issues"
  },

  "keywords": []
}
```

Обратите внимание на имя проекта в конце длинной команды деплоя <code class="nowrap">build</code>!

### Documentation config

Перейдите к документации на VuePress и сконфигурируйте ее под себя<code class="nowrap">@/docs/.vuepress/config.js</code>:

```js
module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'UI Library',
      description: 'Vue Component UI Library',
    },
  },

  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter-test.git',
    docsDir: 'docs',
    search: false,
    locales: {
      '/': {
        nav: [{ text: '', link: '' }],
        sidebar: [
          {
            title: `Components`,
            children: [
              // ... готовые компоненты библиотеки без Sandbox и папки /Tests с тестовыми 
            ],
          },
          {
            title: `Sandbox`,
            path: '/sandbox/sandbox',
          },
        ],
      },
    },
  },
};
```

### Connecting fonts

Исходный проект библиотеки использует шрифт Ubuntu и вам необходимо подключить шрифт который диктует ваше руководстве по стилю. Предположим, это Open Sans и у вас есть его веб-фонт.

Перепишите имя шрифта и переменные начертаний если требуется в файле <code class="nowrap">~/src/stylus/utils/\_typography.styl</code>:

```stylus
$font-family = "Open Sans"

$font-weight = {
  regular: 400,
  bold: 700,
}
```

Поместите папку с правильным шрифтом рядом с папкой <code class="nowrap">/Ubuntu</code> в <code class="nowrap">@/docs/.vuepress/public/fonts/</code>.

Пропишите правильные импорты и пути в файле кастомизации документации на VuePress <code class="nowrap">@/docs/.vuepress/styles/palette.styl/</code>:

```stylus
@import "../../../src/stylus/_stylebase.styl"

// Import fonts
//////////////////////////////////////////////////////

@font-face {
  font-family: $font-family;
  src: url('/fonts/OpenSans/OpenSans-Regular.eot');
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
    url('/fonts/OpenSans/OpenSans-Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/OpenSans/OpenSans-Regular.woff') format('woff'),
    url('/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
  font-weight: $font-weight.regular;
  font-style: normal;
}

@font-face {
  font-family: $font-family;
  src: url('/fonts/OpenSans/OpenSans-Bold.eot');
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
    url('/fonts/OpenSans/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
    url('/fonts/OpenSans/OpenSans-Bold.woff') format('woff'),
    url('/fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
  font-weight: $font-weight.bold;
  font-style: normal;
}

// Customization
//////////////////////////////////////////////////////

...
```

Удалите директорию со старым шрифтом <code class="nowrap">@/docs/.vuepress/public/fonts/Ubuntu</code>.

### Сleaning project

Если вы хотите получить полностью чистую документацию - произведите следующую очистку папок и файлов.

Удалите все папки и файлы в <code class="nowrap">@/docs/</code> кроме директорий <code class="nowrap">@/docs/.vuepress</code>, <code class="nowrap">@/docs/components</code> и файла <code class="nowrap">@/docs/README.md</code> который нужно очистить:

```
# UI Library

...
```

Удалите директорию <code class="nowrap">@/src/components/tests</code>.

Вычистите импорты тестовых компонент в индексном файле <code class="nowrap">@/src/components/index.js</code>:

```js
// Tests - следующие три строчки удалить!!!
export { default as TestColors } from './tests/TestColors';
export { default as TestBreakpoints } from './tests/TestBreakpoints';
export { default as TestTypography } from './tests/TestTypography';

// Elements
...
```

Вы можете выбрать какие компоненты оставить или даже удалить их все, если уверенны в себе и не нуждаетесь в наглядных примерах под рукой. Вернитесь к конфигурации документации и отразите изменения в <code class="nowrap">@/docs/.vuepress/config.js</code>.


### Style setting

Запустите разработку документации командой:

```
$ npm run docs:dev
```

Ознакомтесь с разделом [Constants](https://ui-library-starter.netlify.app/constants/stylebase.html) документации к исходному проекту.

Вам необходимо настроить препроцессор вашей библиотеки в точном соответсвии с вашим руководством по фирменному стилю.

## Adding a component

После того как стили библиотеки настроены вы можете добавлять свои специфические компоненты.

Выберете имя для компонента в PascalCase стиле написания, предположим это <code class="nowrap">ComponentName</code>.

::: warning
Некоторые имена могут оказаться зарезервированы VuePress. <code class="nowrap">Layout</code>, например. Самая достойная замена **Layout** видится как **View**.
:::

Добавьте директорию <code class="nowrap">@/src/components/ComponentName</code>.

Добавьте в нее индексный файл c импортом-экспортом:

<code class="nowrap hidden--gadgets">@/src/components/ComponentName/index.js</code>

```js
import ComponentName from './ComponentName.vue';

export default ComponentName;
```

И сам компонент:

<code class="nowrap hidden--gadgets">@/src/components/ComponentName/ComponentName.vue</code>

```vue
<template>
  <div
    class="component-name"
    :class="{
      '.component-name__element--modifier1': prop1,
      '.component-name__element--modifier2': prop2,
    }"
  >
    This is test component!!!
  </div>
</template>

<script>
export default {
  name: 'ComponentName',

  props: {
    prop1: {
      type: Boolean,
      required: true,
    },
    prop2: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.component-name
  background $colors.primary // test styles
  // add adaptive
  +$mobile()
    display block

  &__element
    $text("natasha") // add typography

    &--modifier1
      color $colors.primary // add good color

    &--modifier2
      color $colors.secondary
</style>
```

Добавьте экспорт в индексный файл библиотеки <code class="nowrap">@/src/components/index.js</code>:

```js
export { default as ComponentName } from './ComponentName';
```

Добавьте документацию компонента в файл <code class="nowrap">@/docs/components/component-name.md</code>:

```markdown
# ComponentName

## Description

This is new custom component.

## Connection

<template>
  <ComponentName prop1="Boolean(required)" />
</template>

## API

### Props

| **Name**  | **Type** | **Description** | **Default** |
| :-------- | :------- | :-------------- | ----------: |
| **prop1** | Boolean  | -               |  (required) |
| **prop2** | Boolean  | -               |     `false` |

...
```

И далее - рендер-тест и исходный код по аналогии с другими файлами.

Добавьте компонент в конфигурацию VuePress <code class="nowrap">@/docs/.vuepress/config.js</code>:

```js
module.exports = {
  themeConfig: {
    locales: {
      '/': {
        sidebar: [
          {
            title: `Components`,
            children: [
              {
                title: `ComponentName`,
                path: '/components/component-name',
              },
            ],
          },
        ],
      },
    },
  },
};
```

## Use the sandbox

Используйте специальный компонент <code class="nowrap">@/src/components/Sandbox/Sandbox.vue</code> и роут документации <code class="nowrap">Sandbox</code> как экспериментальную площадку и холст для создания новых компонент на простых мокках или тестирования взаимодействия между ними. Хотя, очевидно, некоторые компоненты, такие как, например, лейаут - удобнее создавать непосредственно в проекте и уже после этого переносить в библиотеку.

## Library publishing

Зарегистрируйтесь на <span class="nowrap">[npmjs.com](https://www.npmjs.com/)</span> и подтвердите регистрацию (дождитесь письма на почту).

```
$ npm run build
$ npm version patch
$ npm publish
```

## Connecting to projects

Вы можете либо использовать стартовый шаблон для новых проектов <span class="nowrap">[ui-library-start](https://github.com/ushliypakostnik/ui-library-start)</span>, тогда вам придется заменить библиотеку:

```
$ npm uninstall ui-library-starter --save-dev
$ npm install ui-library-starter-test --save-dev
```

Либо установить библиотеку как любой другой модуль в любой другой проект:

```
$ npm install ui-library-starter-test --save-dev
```

Организация стилей дочерних проектов может или иметь подобную библиотеке структуру или любую другую (например, если вы внедряете бибилиотеку в старый проект). Единственное требование: первый импорт в основном файле - основного файла библиотеки. Второй - подключение шрифтов и стилизация <code class="nowrap">:root</code> и <code class="nowrap">body</code>.

<code class="nowrap">@/src/stylus/\_stylebase.styl</code> проекта использующего библиотеку:

```stylus
// Import UI Library stylebase
@import '~ui-library-starter-test/src/stylus/_stylebase.styl';

// core
@import "core/_base"; // normalize
```

<code class="nowrap">@/src/stylus/core/\_base.styl</code> проекта использующего библиотеку:

```stylus
// Import UI Library fonts

@font-face {
  font-family: $font-family;
  src: url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Regular.eot');
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Regular.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Regular.woff') format('woff'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
  font-weight: $font-weight.regular;
  font-style: normal;
}

@font-face {
  font-family: $font-family;
  src: url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Bold.eot');
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Bold.woff') format('woff'),
    url('~ui-library-starter-test/src/static/fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
  font-weight: $font-weight.bold;
  font-style: bold;
}


// Base normalize

:root
  scroll-behavior smooth

body
  font-family $font-family, sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  color $colors.text
  overflow-x hidden
```

Практически единственный повод что-то поменять в этом файле - крайне маловероятная ситуация - замена или добавление шрифта в гайдлайн. Предполагается что отредактировать пути шрифтов придется только один раз - при подключении библиотеки под определенный стиль.

Подключите все это к главному шаблону <code class="nowrap">@/src/App.vue</code>:

```vue
<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";
</style>
```

Исправьте имя библиотеки в импортах в точку входа <code class="nowrap">@/src/main.js</code> если вы брали готовый репо или подключите:

```js
import ComponentLibrary from 'ui-library-starter-test';
import 'ui-library-starter-test/dist/ui-library-starter-test.css';

Vue.use(ComponentLibrary);
```

Исправьте имя или добавьте команду <code class="nowrap">update</code> в <code class="nowrap">@/package.json</code>:

```json
{
  "name": "ui-library-start-test",
  "scripts": {
    "update": "npm install ui-library-starter-test@latest"
  },
}
```

## Updating in projects

Обновляйте библиотеку до последней версии в проектах:

```
$ npm run update
```
