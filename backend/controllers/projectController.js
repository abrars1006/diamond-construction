import Project from '../models/Project.js';

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Get Projects Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch projects', 
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 * @access  Private/Admin
 */
export const createProject = async (req, res) => {
  try {
    const { title, category, imageUrl, description, featured } = req.body;
    
    if (!title || !category || !imageUrl || !description) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const project = await Project.create({
      title,
      category,
      imageUrl,
      description,
      featured: featured || false
    });

    return res.status(201).json({ 
      success: true, 
      message: 'Project created successfully', 
      data: project 
    });
  } catch (error) {
    console.error('Create Project Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to create project', 
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

