import Link from 'next/link'
import styled from '@emotion/styled'

export const NewIcon = props => {
  const Button = styled.div`
    position: absolute;
    bottom: 73px;
    right: 20px;
    background-color: #1da1f2;
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    box-shadow: rgb(136 153 166 / 20%) 0px 0px 10px, rgb(136 153 166 / 25%) 0px 1px 3px 1px;
}

  `
  return (
    <Link href="/compose/tweet">
      <Button>
        <svg width={22.5} height={22.5} fill="#fff" viewBox="0 0 24 24" {...props}>
          <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z" />
        </svg>
      </Button>
    </Link>
  )
}

export const CommentIcon = props => {
  return (
    <svg width={18.75} height={18.75} fill="#8899a6" viewBox="0 0 24 24" {...props}>
      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
    </svg>
  )
}

export const RetweetIcon = props => {
  return (
    <svg width={18.75} height={18.75} fill="#8899a6" viewBox="0 0 24 24" {...props}>
      <path d="M23.77 15.67a.749.749 0 00-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 00-3.75-3.75h-5.85a.75.75 0 000 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 10-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 000-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 001.062 0 .749.749 0 000-1.06l-3.5-3.5a.747.747 0 00-1.06 0l-3.5 3.5a.749.749 0 101.06 1.06l2.22-2.22V16.7a3.755 3.755 0 003.75 3.75h5.85a.75.75 0 000-1.5z" />
    </svg>
  )
}

export const LikeIcon = props => {
  return (
    <svg viewBox="0 0 24 24" width={18.75} height={18.75} stroke="#8899a6" {...props}>
      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
    </svg>
  )
}

export const FilledLikeIcon = props => {
  return (
    <svg viewBox="0 0 24 24" width={18.75} height={18.75} fill="#e0245e" {...props}>
      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" />
    </svg>
  )
}

export const ShareIcon = props => {
  return (
    <svg viewBox="0 0 24 24" width={18.75} height={18.75} fill="#8899a6" {...props}>
      <path d="M17.53 7.47l-5-5a.749.749 0 00-1.06 0l-5 5a.749.749 0 101.06 1.06l3.72-3.72V15a.75.75 0 001.5 0V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22a.749.749 0 000-1.06z" />
      <path d="M19.708 21.944H4.292A2.294 2.294 0 012 19.652V14a.75.75 0 011.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 00.792-.792V14a.75.75 0 011.5 0v5.652a2.294 2.294 0 01-2.292 2.292z" />
    </svg>
  )
}

export const HomeIcon = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22.58 7.35L12.475 1.897a1 1 0 00-.95 0L1.425 7.35A1.002 1.002 0 001.9 9.231c.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759zM12 15.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" />
    </svg>
  )
}

export const SearchIcon = props => {
  return (
    <svg viewBox="0 0 24 24" fill="#8899a6" {...props}>
      <path d="M21.53 20.47l-3.66-3.66A8.98 8.98 0 0020 11a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
    </svg>
  )
}

export const BellIcon = props => {
  return (
    <svg viewBox="0 0 24 24" fill="#8899a6" {...props}>
      <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 00.447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 00-.263-.838zM12 20.478a2.84 2.84 0 01-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />
    </svg>
  )
}

export const MailIcon = props => {
  return (
    <svg viewBox="0 0 24 24" fill="#8899a6" {...props}>
      <path d="M19.25 3.018H4.75A2.753 2.753 0 002 5.77v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0022 18.265V5.77a2.753 2.753 0 00-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 01-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z" />
    </svg>
  )
}

export const StarIcon = props => {
  return (
    <svg width={24} height={24} fill="#1da1f2" viewBox="0 0 24 24" {...props}>
      <path d="M22.772 10.506l-5.618-2.192-2.16-6.5a.751.751 0 00-1.424-.001l-2.16 6.5-5.62 2.192a.751.751 0 00.001 1.398l5.62 2.192 2.16 6.5a.752.752 0 001.424 0l2.16-6.5 5.62-2.192a.751.751 0 00-.001-1.397zm-6.49 2.32a.748.748 0 00-.44.46l-1.56 4.695-1.56-4.693a.753.753 0 00-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05a.75.75 0 00-1.5 0v1.762H1.5a.75.75 0 000 1.5h1.782v1.762a.75.75 0 001.5 0V5.312h1.88a.75.75 0 100-1.5zm2.535 15.622h-1.1v-1.016a.75.75 0 10-1.5 0v1.016H5.57a.75.75 0 000 1.5H6.6v1.016a.75.75 0 101.5 0v-1.016h1.098a.75.75 0 000-1.5z" />
    </svg>
  )
}

export const ArrowLeftIcon = props => {
  return (
    <svg
      width={22.5}
      height={22.5}
      fill="#1da1f2"
      viewBox="0 0 24 24"
      className="prefix__r-13gxpu9 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-1q142lx prefix__r-50lct3 prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr prefix__r-1srniue"
      {...props}
    >
      <path d="M20 11H7.414l4.293-4.293a1 1 0 00-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a.996.996 0 001.414 0 1 1 0 000-1.414L7.414 13H20a1 1 0 100-2z" />
    </svg>
  )
}

export const Times = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__css-i6dzq1"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
