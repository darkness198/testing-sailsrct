module.exports = {
  updateNotificationSettings: async (req, res) => {
    const {
      receiveEmails,
      receiveTexts
    } = req.allParams()
    const userid = CryptographyService.decrypt(this.req.cookies.user)
    let isAdmin = null
    if (this.req.cookies.isAdmin) isAdmin = CryptographyService.decrypt(this.req.cookies.isAdmin)
    let updatedUser = await User.update({
        id: userId
      })
      .set({
        receiveEmails,
        receiveTexts
      })
      .fetch();
    if (updatedUser) return res.json(updatedUser);
  }
}