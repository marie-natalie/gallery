var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mariemaina:user1234@cluster0.hac9gje.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://mariemaina:user1234@cluster0.hac9gje.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://mariemaina:user1234@cluster0.hac9gje.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
