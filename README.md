<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Kalan - Stock prediction</h3>

  <p align="center">
    Kalan is a stock prediction tool for the Brazilian stock market. It uses AI custom models to predict the price of stocks
    <br />
     <a href="https://othecos.github.io/kalan-interface"><strong>Check the demo</strong></a> 
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuring-environments">Configuring environments</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the interface that shows the predictions results

### Built With

-   [React.Js](https://reactjs.org/)
-   [Material Ui](https://material-ui.com/)
-   [Axios](https://github.com/axios/axios)
-   [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

#

### Prerequisites

You should have <strong>Node and NPM</strong> installed to run this project.

To check with you have those installed, run and see some similar output:

-   NPM
    ```sh
    npm -v
    6.14.4
    ```
-   Node
    ```sh
    node -v
    v10.19.0
    ```

### Installation

1. Install the NPM Packages dependencies
    ```sh
     npm install
    ```

### Configuring environments

1. Since this application uses Google Maps, you **must** provide `NEXT_PUBLIC_API_KEY` in the `.env.local`

    - You can generate this API KEY [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

2. You also must config your `NEXT_PUBLIC_HOST`.
   <br>
   You can use our ready to use server that was provided in the `.env.example` , or connect to local instance.

3. In the end of this steps, your `.env.local` should look like this

    ```sh
    NEXT_PUBLIC_API_KEY=AIzaSyAIo1JFFQDuBesadasdasd-dsa3CAxnBHzE
    NEXT_PUBLIC_HOST=https://mam-challenge-backend.herokuapp.com/
    NEXT_PUBLIC_VERSION="v1"
    ```

#

## Usage

After the initial setup, you are ready to go and can start your development server

1. To use your local environment, run:

    ```sh
    npm run dev
    ```

#
