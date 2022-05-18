import { User } from '../../../services/models/user';

interface InputUser {
  firstName: String;
  lastName: String;
  phoneNumber: number;
}

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find({});

        return users;
      } catch (err) {
        console.log(err);
      }
    }
  },
  Mutation: {
    newUser: async (_: any, { input }: Record<string, InputUser>) => {
      const newUser = input;
      newUser.firstName = newUser.firstName.toLowerCase();
      newUser.lastName = newUser.lastName.toLowerCase();

      const { firstName, lastName, phoneNumber } = newUser;
      const foundFirstName = await User.findOne({ firstName });
      const foundLastName = await User.findOne({ lastName });
      const foundPhoneNumber = await User.findOne({ phoneNumber });

      if (foundFirstName && foundLastName)
        throw new Error('Ya confirmo su presencia!');

      if (foundPhoneNumber) throw new Error('Ya existe el N. de telefono!');

      try {
        const user = new User(newUser);

        const result = await user.save();

        return result;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export default resolvers;
