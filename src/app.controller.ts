import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('userprofile')
  root() {
    return {message: "hello world",
      expierence:
        ["gassi gehen", "futter kaufen"],
      animals: [
        {
          name: "Felix",
          animalPicture: "assets/img/alexander-else-foto.jpg"
        },
        {
          name: "Rex",
          animalPicture: "assets/img/alexander-else-foto.jpg"
        },
        {
          name: "katze",
          animalPicture: "assets/img/alexander-else-foto.jpg"
        },
        {
          name: "hund",
          animalPicture: "assets/img/alexander-else-foto.jpg"
        }
      ]
    };
  }
}

