![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie: Konfiguracja środowiska

Zadanie polega na skonfigurowaniu środowiska do pracy z ES6. Naszym projektem testowym będzie kod zawarty w katalogu `05_Konfiguracja_srodowiska` w repozytorium `Prework_JavaScript`.

> **Wszystkie komendy wykonuj w głównym miejscu repozytorium z preworkiem**

### Inicjalizacja projektu

Aby skonfigurować odpowiednie środowisko dla pracy z ES6+, musimy stworzyć plik `package.json`.

Plik ten będzie zawierał informacje o całym naszym projekcie, w tym o wszystkich zależnościach, które są niezbędne do poprawnego działania / kompilacji.

Aby go stworzyć **w głównym katalogu repozytorium** wpisz komendę:

```shell script
npm init -y
```

Flaga `-y` przy poleceniu `init` sprawia, że plik zostaje stworzony z domyślnymi ustawieniami. W naszym przypadku będzie to wystarczające.

### Webpack

Ponieważ będziemy korzystać podczas tego modułu z ES6+ a także później z Reacta, **potrzebne jest nam odpowiednie narzędzie, które może skompilować nasz kod do postaci rozumianej przez większość przeglądarek**. Na szczęście to zadanie może być wykonane przez Webpack wraz z Babelem.

Najpierw zainstalujemy Webpacka:

```shell script
npm i webpack@5.72.1 webpack-cli@4.10.0 process@0.11.10 -D
```

**Wszystkie trzy paczki są niezbędne**, w odpowiednich wersjach (webpack w wersji 5.72.1 i webpack-cli w wersji 4.10.0 a także process w wersji 0.11.10).

### Babel

Będziemy wykorzystywać jeden (jak na razie) preset do Babela: `@babel/preset-env`, który omawialiśmy wcześniej.

Zależności te zostaną dodane do pliku `package.json`:

```shell script
npm i babel-loader @babel/core @babel/preset-env -D
```

Podsumowując, musimy zainstalować:

- `babel-loader` – loader dla narzędzi Webpack
- `@babel/core` – rdzeń, kompilator
- `@babel/preset-env ` – zbiór wtyczek do ES6

### webpack-dev-server

W procesie deweloperskim bardzo przydatnym narzędziem jest `webpack-dev-server`.

Pozwala na szybkie stworzenie serwera lokalnego, na którym uruchamiane będą nasze projekty i który dodatkowo będzie automatycznie odświeżał kartę przeglądarki w momencie, gdy wprowadzimy zmiany w plikach.

Dlatego dołączymy to narzędzie do naszego projektu:

```shell script
npm i webpack-dev-server -D
```

### Konfiguracja Webpacka

Praktycznie wszystkie zależności mamy zainstalowane, dlatego teraz w głównym folderze repozytorium należy stworzyć dwa pliki: `webpack.config.js` oraz `.babelrc` (bardzo ważna jest kropka w nazwie pliku "`.babelrc`"). Jak wiesz, będą one służyły do ustawienia odpowiedniej kompilacji naszego projektu.

Plik `.babelrc` powinien zawierać następującą konstrukcję:

```json
{
  "presets": ["@babel/preset-env"]
}
```

Plik `webpack.config.js` powinien wyglądać tak:

```js
const path = require("path");
const webpack = require("webpack");

const entryPath = "05_Konfiguracja_srodowiska/01_Projekt_testowy";

module.exports = {
  mode: "none",
  entry: `./${entryPath}/js/app.js`,
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
```

Skupimy się teraz na jego najważniejszej części:

```js
const entryPath = "05_Konfiguracja_srodowiska/01_Projekt_testowy";
```

W trzeciej linii znajdziesz zmienną `entryPath`. Ona określa ścieżkę do folderu z zadaniem, które aktualnie wykonujecie. Należy tam nastawić odpowiedni folder, na którym aktualnie pracujesz!

Np. `05_Konfiguracja_srodowiska/01_Projekt_testowy`, `01_Dzien_1/02_Funkcje_strzalkowe/01_Zadanie_1` itd.

Nasza konfiguracja Webpacka zawsze odwołuje się w danym folderze do pliku `js/app.js`.

**Po każdej aktualizacji pliku `webpack.config.js` należy zatrzymać działanie skryptu i uruchomić go od nowa.**

### Plik package.json

Teraz kiedy mamy zainstalowaną większość zależności, możemy wrócić do pliku `package.json`. Aby łatwiej nam się uruchamiało webpacka, czy to w wersji deweloperskiej (`webpack-dev-server`), czy w produkcyjnej (`webpack`), zmodyfikujemy nieco klucz `scripts`.

W kluczu tym możemy podawać komendy, które mają być uruchamiane przez npm. Zmodyfikuj plik `package.json` tak, aby klucz `scripts` wyglądał jak poniżej.

```json
{
  "start": "webpack serve",
  "build": "webpack"
}
```

- `start` – komenda, której będziemy używać najczęściej. Uruchomi ona serwer deweloperski. Aby skorzystać z tej komendy w terminalu/konsoli wpisujemy:

  ```shell script
  npm start
  ```

- `build` – komenda ta buduje produkcyjną wersję naszej aplikacji. Oznacza to, że pojawi się folder build z plikiem `out.js`. Aby skorzystać z tej komendy w terminalu/konsoli wpisujemy:

  ```shell script
  npm run build
  ```

### Efekt

Jeżeli zostały wykonane wszystkie komendy poprawnie, to po uruchomieniu `npm start` w konsoli, i otwarciu `http://localhost:3001` w przeglądarce, powinna pokazać się skompilowana strona testowa.
