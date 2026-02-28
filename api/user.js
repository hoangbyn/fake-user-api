import { faker } from "@faker-js/faker";
import { en_US } from "@faker-js/faker/locale";

const fakerUS = new faker({ locale: [en_US] });

export default function handler(req, res) {
  const user = {
    firstName: fakerUS.person.firstName(),
    lastName: fakerUS.person.lastName(),
    address: fakerUS.location.streetAddress(),
    city: fakerUS.location.city(),
    state: fakerUS.location.state(),
    country: "United States",
    postalCode: fakerUS.location.zipCode(),
    email: fakerUS.internet.email(),
    phone: fakerUS.phone.number()
  };

  res.status(200).json(user);
}
