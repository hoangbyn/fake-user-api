import { Faker, en_US } from "@faker-js/faker";

const fakerUS = new Faker({ locale: [en_US] });

export default function handler(req, res) {
  const user = {
    firstName: fakerUS.person.firstName(),
    lastName: fakerUS.person.lastName(),
    address: fakerUS.location.streetAddress(),
    city: fakerUS.location.city(),
    state: fakerUS.location.state(),
    postalCode: fakerUS.location.zipCode(),
    country: "United States",
    email: fakerUS.internet.email(),
    phone: fakerUS.phone.number(),
  };

  res.status(200).json(user);
}
