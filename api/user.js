import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  };

  res.status(200).json(user);
}
