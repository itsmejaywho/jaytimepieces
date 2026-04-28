import { useState } from 'react'
import { NavLogin } from '../../components'
import '../Shop/Shop.css'
import './Profile.css'

const Profile = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: 'user@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    street: '',
    zipCity: '',
  })

  const [personalInfo, setPersonalInfo] = useState({
    gender: '',
    dateOfBirth: '',
    phone: '',
    occupation: '',
    languages: '',
  })

  const [editingEmail, setEditingEmail] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const [showPasswordFields, setShowPasswordFields] = useState({
    current: false,
    next: false,
    confirm: false,
  })

  const handleLoginChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }

  const handleBillingChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value })
  }

  const handlePersonalChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
  }

  const togglePasswordField = (field) => {
    setShowPasswordFields((current) => ({
      ...current,
      [field]: !current[field],
    }))
  }

  return (
    <div className="shop-page">
      <NavLogin brandLinkClassName="shop-logo-link" brandInnerClassName="profile-logo" />

      <div className="profile-content">
        <h1 className="profile-heading">Profile Settings</h1>

        <div className="profile-cards">
          {/* Card 1: Login Information */}
          <div className="profile-card">
            <h2 className="profile-card-title">Login Information</h2>

            <div className="profile-field">
              <label className="profile-label">Email</label>
              {editingEmail ? (
                <div className="profile-field-row">
                  <input
                    type="email"
                    name="email"
                    value={loginInfo.email}
                    onChange={handleLoginChange}
                    className="profile-input"
                  />
                  <button className="profile-btn profile-btn-sm" onClick={() => setEditingEmail(false)}>
                    Verify & Save
                  </button>
                </div>
              ) : (
                <div className="profile-field-row">
                  <span className="profile-value">{loginInfo.email}</span>
                  <button className="profile-btn-text" onClick={() => setEditingEmail(true)}>Edit</button>
                </div>
              )}
            </div>

            <div className="profile-divider" />

            {changingPassword ? (
              <>
                <div className="profile-field">
                  <label className="profile-label">Current Password</label>
                  <div className="profile-field-row">
                    <input
                      type={showPasswordFields.current ? 'text' : 'password'}
                      name="currentPassword"
                      value={loginInfo.currentPassword}
                      onChange={handleLoginChange}
                      className="profile-input"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      className="profile-btn-text profile-password-toggle"
                      onClick={() => togglePasswordField('current')}
                    >
                      {showPasswordFields.current ? 'Hide' : 'View'}
                    </button>
                  </div>
                </div>
                <div className="profile-field">
                  <label className="profile-label">New Password</label>
                  <div className="profile-field-row">
                    <input
                      type={showPasswordFields.next ? 'text' : 'password'}
                      name="newPassword"
                      value={loginInfo.newPassword}
                      onChange={handleLoginChange}
                      className="profile-input"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="profile-btn-text profile-password-toggle"
                      onClick={() => togglePasswordField('next')}
                    >
                      {showPasswordFields.next ? 'Hide' : 'View'}
                    </button>
                  </div>
                </div>
                <div className="profile-field">
                  <label className="profile-label">Confirm Password</label>
                  <div className="profile-field-row">
                    <input
                      type={showPasswordFields.confirm ? 'text' : 'password'}
                      name="confirmPassword"
                      value={loginInfo.confirmPassword}
                      onChange={handleLoginChange}
                      className="profile-input"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      className="profile-btn-text profile-password-toggle"
                      onClick={() => togglePasswordField('confirm')}
                    >
                      {showPasswordFields.confirm ? 'Hide' : 'View'}
                    </button>
                  </div>
                </div>
                <div className="profile-card-actions">
                  <button className="profile-btn" onClick={() => setChangingPassword(false)}>Save Password</button>
                  <button className="profile-btn-text" onClick={() => setChangingPassword(false)}>Cancel</button>
                </div>
              </>
            ) : (
              <div className="profile-field">
                <label className="profile-label">Password</label>
                <div className="profile-field-row">
                  <span className="profile-value">••••••••</span>
                  <button className="profile-btn-text" onClick={() => setChangingPassword(true)}>Change</button>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Billing Information */}
          <div className="profile-card">
            <h2 className="profile-card-title">Billing Information</h2>

            <div className="profile-field">
              <label className="profile-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleBillingChange}
                className="profile-input"
                placeholder="Enter first name"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={billingInfo.lastName}
                onChange={handleBillingChange}
                className="profile-input"
                placeholder="Enter last name"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Street</label>
              <input
                type="text"
                name="street"
                value={billingInfo.street}
                onChange={handleBillingChange}
                className="profile-input"
                placeholder="Enter street address"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Zip Code / City</label>
              <input
                type="text"
                name="zipCity"
                value={billingInfo.zipCity}
                onChange={handleBillingChange}
                className="profile-input"
                placeholder="Enter zip code and city"
              />
            </div>

            <div className="profile-card-actions">
              <button className="profile-btn">Save Billing</button>
            </div>
          </div>

          {/* Card 3: Personal Information */}
          <div className="profile-card">
            <h2 className="profile-card-title">Personal Information</h2>

            <div className="profile-field">
              <label className="profile-label">Gender</label>
              <select
                name="gender"
                value={personalInfo.gender}
                onChange={handlePersonalChange}
                className="profile-input profile-select"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not">Prefer not to say</option>
              </select>
            </div>
            <div className="profile-field">
              <label className="profile-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={personalInfo.dateOfBirth}
                onChange={handlePersonalChange}
                className="profile-input"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalChange}
                className="profile-input"
                placeholder="Enter phone number"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={personalInfo.occupation}
                onChange={handlePersonalChange}
                className="profile-input"
                placeholder="Enter occupation"
              />
            </div>
            <div className="profile-field">
              <label className="profile-label">Languages</label>
              <input
                type="text"
                name="languages"
                value={personalInfo.languages}
                onChange={handlePersonalChange}
                className="profile-input"
                placeholder="e.g., English, Filipino, Japanese"
              />
            </div>

            <div className="profile-card-actions">
              <button className="profile-btn">Save Personal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
