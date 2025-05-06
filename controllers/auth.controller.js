const login = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка auth.controller login:', error);
    res.status(500).json('error');
  }
};

const logout = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка auth.controller logout:', error);
    res.status(500).json('error');
  }
};

module.exports = {
  login,
  logout,
};
