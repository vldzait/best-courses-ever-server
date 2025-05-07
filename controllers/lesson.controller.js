const create = async (req, res) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('Ошибка lesson.controller create:', error);
    res.status(500).json('error');
  }
};

const readAll = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка lesson.controller readAll:', error);
    res.status(500).json('error');
  }
};

const readOne = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка lesson.controller readOne:', error);
    res.status(500).json('error');
  }
};

const update = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка lesson.controller update:', error);
    res.status(500).json('error');
  }
};

const destroy = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('Ошибка lesson.controller destroy:', error);
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
