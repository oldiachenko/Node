const { models: { userModel } } = require('../dataBase');
const { passwordHasher, tokenizer } = require('../helper');
const { errorMessages } = require('../message');
const { oAuthService } = require('../service');

module.exports = {
    authUser: async (req, res) => {
        try {
            const { email, password, preferLang = 'en' } = req.body;

            const user = await userModel.findOne({ email });

            if (!user) {
                throw new Error(errorMessages.USER_DOESNOT_EXIST[preferLang]);
            }

            await passwordHasher.compare(password, user.password);

            const tokens = tokenizer();

            await oAuthService.createTokens({ ...tokens, user: user._id });

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    }
};
