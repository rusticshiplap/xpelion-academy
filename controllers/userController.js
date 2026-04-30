import { User } from '../models/User.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (err) {
    console.error('Get profile error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, avatarUrl } = req.body;
    const user = await User.updateProfile(req.user.id, { name, avatarUrl });
    return res.json(user);
  } catch (err) {
    console.error('Update profile error:', err);
    return res.status(500).json({ error: err.message });
  }
};
