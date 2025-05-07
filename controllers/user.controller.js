const create = async (req, res) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('Ошибка user.controller create:', error);
    res.status(500).json('error');
  }
};

const readAll = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка user.controller readAll:', error);
    res.status(500).json('error');
  }
};

const readOne = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка user.controller readOne:', error);
    res.status(500).json('error');
  }
};

const update = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка user.controller update:', error);
    res.status(500).json('error');
  }
};

const destroy = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка user.controller destroy:', error);
    res.status(500).json('error');
  }
};

module.exports = {
  create,
  readAll,
  readOne,
  update,
  destroy
};
