import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ReusableInput from '../ui/ReusableInput';
import Button from '../ui/Button';
import H1 from '../ui/H1';
import Animation from '../utils/Animation';

const MyProfileForm = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const [editMode, setEditMode] = useState(false);

  const userInitialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    address: user.address,
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  };

  const [formData, setFormData] = useState(userInitialValues);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add your logic for saving profile changes here
    console.log(formData);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDiscard = () => {
    setFormData(userInitialValues);
    setEditMode(false);
  };

  console.log(editMode);

  return (
    <>
      {isLoggedIn && (
        <div className={`${!editMode ? 'md:w-1/2 ' : ''} md:mx-10`}>
          <H1 title="My Profile" />
          <form
            onSubmit={handleSave}
            className={`${editMode ? 'relative' : 'md:items-end'} w-full md:flex md:gap-5`}
          >
            <div className="w-full">
              <Animation type="3">
                <ReusableInput
                  name="firstName"
                  label="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  readOnly={editMode}
                  required
                  pattern="^[A-Za-z0-9 ,.'\-]{3,40}$"
                  errorMessage="Field should be between 3 and 40 characters"
                />
                <ReusableInput
                  name="lastName"
                  label="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  readOnly={editMode}
                  required
                  pattern="^[A-Za-z0-9 ,.'\-]{3,40}$"
                  errorMessage="Field should be between 3 and 40 characters"
                />
                <ReusableInput
                  name="email"
                  label="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={true}
                  errorMessage="A valid email is required"
                />
                <ReusableInput
                  name="phone"
                  label="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  readOnly={editMode}
                  required
                  // pattern="^(?:+d{1,3}s?)?(?:(d{3})|d{3})[-.s]?d{3}[-.s]?d{4}$"
                  errorMessage="A valid phone number is required"
                />
                <ReusableInput
                  name="address"
                  label="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  readOnly={editMode}
                  required={false}
                />
              </Animation>
            </div>

            {editMode && (
              <div className="w-full">
                <Animation type="4">
                  <ReusableInput
                    name="currentPassword"
                    label="current password"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required={formData.newPassword ? true : false}
                    errorMessage="Enter your current password"
                  />
                  <ReusableInput
                    name="newPassword"
                    label="new password"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required={false}
                    pattern="^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$"
                    errorMessage="Password should be between 8-20 characters, must include at least 1 letter, 1 number, and 1 special character"
                  />
                  <ReusableInput
                    name="newPasswordConfirm"
                    label="confirm new password"
                    type="password"
                    value={formData.newPasswordConfirm}
                    onChange={handleChange}
                    required={formData.newPassword ? true : false}
                    pattern={formData.newPassword}
                    errorMessage="Passwords do not match"
                  />
                </Animation>
              </div>
            )}
            <div
              className={`${editMode && 'flex justify-end md:absolute md:bottom-0 md:right-0 md:block'}`}
            >
              {!editMode && (
                <Button type="primary" onClick={handleEdit}>
                  Edit
                </Button>
              )}

              {editMode && (
                <>
                  <Button
                    type="pointer"
                    disabled={
                      JSON.stringify(formData) ===
                        JSON.stringify(userInitialValues) ||
                      (formData.currentPassword && !formData.newPassword)
                    }
                  >
                    Save
                  </Button>
                  <Button type="pointer" onClick={handleDiscard}>
                    Discard
                  </Button>
                </>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default MyProfileForm;
