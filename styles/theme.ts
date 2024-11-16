const theme = {
  colors: {
    background: '#121212',
    cardBackground: '#1e1e1e',
    primary: '#ff4081',
    textPrimary: '#ffffff',
    textSecondary: '#d1d1d1',
    textTertiary: '#b0b0b0',
  },
  fonts: {
    regular: 'System',
    bold: 'System',
    italic: 'System',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  borderRadius: 8,
  postStyles: {
    container: {
      backgroundColor: '#1e1e1e',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#353535',
      padding: 16,
      marginBottom: 12,
      elevation: 5,
      shadowColor: '#000000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    },
    title: {
      fontSize: 20,
      color: '#ffffff',
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 8,
    },
    content: {
      fontSize: 16,
      color: '#d1d1d1',
      marginBottom: 8,
    },
    author: {
      fontSize: 14,
      color: '#b0b0b0',
      fontStyle: 'italic',
      marginBottom: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    authorName: {
      fontSize: 14,
      color: '#b0b0b0',
    },
    date: {
      fontSize: 12,
      color: '#8e8e8e',
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 12,
    },
    button: {
      backgroundColor: '#ff4081',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  inputStyles: {
    container: {
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      padding: 8,
      borderRadius: 8,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#353535',
    },
    focused: {
      borderColor: '#ff4081',
    },
  },
}

export default theme
