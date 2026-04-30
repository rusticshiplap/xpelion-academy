import { StudyGroup } from '../models/StudyGroup.js';

export const createGroup = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Group name required' });
    }

    const group = await StudyGroup.create({
      name,
      description: description || '',
      createdBy: req.user.id,
    });

    return res.status(201).json(group);
  } catch (err) {
    console.error('Create group error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getMyGroups = async (req, res) => {
  try {
    const groups = await StudyGroup.getUserGroups(req.user.id);
    return res.json(groups);
  } catch (err) {
    console.error('Get groups error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getGroupDetails = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await StudyGroup.getGroupById(groupId);

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const isMember = await StudyGroup.isMember(groupId, req.user.id);
    if (!isMember && group.created_by !== req.user.id) {
      return res.status(403).json({ error: 'You are not a member of this group' });
    }

    const members = await StudyGroup.getGroupMembers(groupId);
    const progress = group.shared_progress ? await StudyGroup.getGroupProgress(groupId) : [];

    return res.json({
      ...group,
      members,
      progress,
    });
  } catch (err) {
    console.error('Get group details error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const joinGroup = async (req, res) => {
  try {
    const { inviteCode } = req.body;

    if (!inviteCode) {
      return res.status(400).json({ error: 'Invite code required' });
    }

    const group = await StudyGroup.getGroupByInviteCode(inviteCode);
    if (!group) {
      return res.status(404).json({ error: 'Invalid invite code' });
    }

    const isMember = await StudyGroup.isMember(group.id, req.user.id);
    if (isMember) {
      return res.status(409).json({ error: 'You are already a member of this group' });
    }

    await StudyGroup.addMember(group.id, req.user.id);
    return res.status(200).json(group);
  } catch (err) {
    console.error('Join group error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const leaveGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await StudyGroup.getGroupById(groupId);

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    if (group.created_by === req.user.id) {
      return res.status(403).json({ error: 'Creator cannot leave group' });
    }

    await StudyGroup.removeMember(groupId, req.user.id);
    return res.json({ message: 'Left group' });
  } catch (err) {
    console.error('Leave group error:', err);
    return res.status(500).json({ error: err.message });
  }
};

export const getGroupProgress = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await StudyGroup.getGroupById(groupId);

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const isMember = await StudyGroup.isMember(groupId, req.user.id);
    if (!isMember && group.created_by !== req.user.id) {
      return res.status(403).json({ error: 'You are not a member of this group' });
    }

    if (!group.shared_progress) {
      return res.json([]);
    }

    const progress = await StudyGroup.getGroupProgress(groupId);
    return res.json(progress);
  } catch (err) {
    console.error('Get group progress error:', err);
    return res.status(500).json({ error: err.message });
  }
};
