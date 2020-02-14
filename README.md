<p align="center">
  <h3 align="center">MOCK SHOP API SERVER</h3>

  <p align="center">
    Mock Shop API server to manage Products and Cart
    <br />
    <a href="https://mock-shop-api.herokuapp.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mock-shop-api.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/vvilliam5/mock-shop-api-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/vvilliam5/mock-shop-api-server/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project
An API server authenticated with JWT, users can sign up and sign in, view products, add products to cart, view cart and delete products from cart. Admins can manage products(view, add, edit and delete). All routes are restricted by authentication using JWT, the token is returned upon successful login by the user, the user then accesses these endpoints using this token. SO its important to login first before accessing the endpoints. the only endpoint that isnt restricted is the get users endpoint, to help in testing

### Built With

* [nodejs]
* [expressjs]
* [postgresql]
* [swagger]
* [heroku]



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/vvilliam5/mock-shop-api-server.git
```
2. Install NPM packages
```sh
npm install
```
3. Startup Server locally
```sh
npm start
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Williams -  realwilliams01@gmail.com

Project Link: [https://github.com/vvilliam5/mock-shop-api-server](https://github.com/vvilliam5/mock-shop-api-server)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [jwt]()
* [sequelize]()
