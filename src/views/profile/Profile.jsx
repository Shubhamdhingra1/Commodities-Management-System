import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Divider,
  Button,
  TextField,
  IconButton,
  useTheme,
  Paper,
  Tooltip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Email as EmailIcon,
  Badge as BadgeIcon,
  Work as WorkIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Profile = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
    avatar: user?.avatar || '',
  });
  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || '',
      avatar: user?.avatar || '',
    });
    setIsEditing(false);
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the user
    setIsEditing(false);
  };

  const handleAvatarClick = () => {
    if (isEditing) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser({
          ...editedUser,
          avatar: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <Card
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              bgcolor: `${color}20`,
              borderRadius: 2,
              p: 1,
              mr: 2,
            }}
          >
            <Icon sx={{ color: color, fontSize: 32 }} />
          </Box>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={3}>
          {/* Profile Header */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 4,
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '120px',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  zIndex: 0,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                <Tooltip title={isEditing ? "Click to change profile picture" : ""}>
                  <Box
                    sx={{
                      position: 'relative',
                      cursor: isEditing ? 'pointer' : 'default',
                      '&:hover': {
                        '& .avatar-overlay': {
                          opacity: isEditing ? 1 : 0,
                        },
                      },
                    }}
                    onClick={handleAvatarClick}
                  >
                    <Avatar
                      src={editedUser.avatar}
                      sx={{
                        width: 120,
                        height: 120,
                        border: '4px solid white',
                        boxShadow: theme.shadows[4],
                      }}
                    >
                      {editedUser.name?.charAt(0) || 'U'}
                    </Avatar>
                    {isEditing && (
                      <Box
                        className="avatar-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgba(0, 0, 0, 0.5)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.2s',
                        }}
                      >
                        <PhotoCameraIcon sx={{ color: 'white', fontSize: 32 }} />
                      </Box>
                    )}
                  </Box>
                </Tooltip>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Box sx={{ color: 'white' }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {editedUser.name || 'User'}
                  </Typography>
                  <Typography variant="subtitle1">
                    {editedUser.role === 'manager' ? 'Manager' : 'Store Keeper'}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Profile Details */}
          <Grid item xs={12} md={8}>
            <Card sx={{ bgcolor: theme.palette.background.paper }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Profile Information
                  </Typography>
                  {!isEditing ? (
                    <Button
                      startIcon={<EditIcon />}
                      onClick={handleEdit}
                      variant="outlined"
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        startIcon={<SaveIcon />}
                        onClick={handleSave}
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                      <Button
                        startIcon={<CancelIcon />}
                        onClick={handleCancel}
                        variant="outlined"
                        color="error"
                      >
                        Cancel
                      </Button>
                    </Box>
                  )}
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      value={editedUser.name}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, name: e.target.value })
                      }
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <BadgeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, email: e.target.value })
                      }
                      disabled={!isEditing}
                      InputProps={{
                        startAdornment: (
                          <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Role"
                      value={editedUser.role === 'manager' ? 'Manager' : 'Store Keeper'}
                      disabled={true}
                      InputProps={{
                        startAdornment: (
                          <WorkIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StatCard
                  icon={WorkIcon}
                  title="Role"
                  value={user?.role === 'manager' ? 'Manager' : 'Store Keeper'}
                  color={theme.palette.primary.main}
                />
              </Grid>
              <Grid item xs={12}>
                <StatCard
                  icon={EmailIcon}
                  title="Email"
                  value={user?.email || 'N/A'}
                  color={theme.palette.secondary.main}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Profile; 