/**
 * CitaBooking™ Complete Branding System
 *
 * Three logo variants for different use cases:
 * 1. CitaBookingLogo - Horizontal wordmark (headers, marketing, email signatures)
 * 2. CitaBookingIcon - Square icon (app icons, favicons, social avatars)
 * 3. CitaBookingWatermark - Transparent overlay (videos, photos, reels)
 */

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  iconColor?: string;
  textColor?: string;
}

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  iconColor?: string;
}

interface WatermarkProps {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  color?: string;
}

/**
 * 1. HORIZONTAL WORDMARK
 * Use for: Website headers, hero sections, email signatures, business cards
 * Size: 420 × 120px (3.5:1 aspect ratio)
 */
export function CitaBookingLogo({
  className,
  style,
  title = "CitaBooking",
  iconColor = "#E8654A",
  textColor = "#0F172A",
}: LogoProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 420 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* Rounded container */}
      <rect x="0" y="10" width="100" height="100" rx="24" fill={iconColor} />

      {/* Grid (structured but clean) */}
      <rect x="24" y="34" width="16" height="16" rx="4" fill="white" />
      <rect x="46" y="34" width="16" height="16" rx="4" fill="white" />
      <rect x="68" y="34" width="16" height="16" rx="4" fill="white" />

      <rect x="24" y="56" width="16" height="16" rx="4" fill="white" />
      <rect x="46" y="56" width="16" height="16" rx="4" fill="white" />

      {/* Strong check (confidence) */}
      <path
        d="M56 78 L68 90 L88 68"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Wordmark */}
      <text
        x="120"
        y="78"
        fill={textColor}
        fontSize="48"
        fontWeight="700"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        letterSpacing="-0.5"
      >
        CitaBooking
      </text>

      <text
        x="385"
        y="48"
        fill={textColor}
        fontSize="12"
        fontFamily="Inter, system-ui, sans-serif"
      >
        ™
      </text>
    </svg>
  );
}

/**
 * 2. SQUARE ICON (No Text)
 * Use for: App icons, favicons, social media profile pictures, push notifications
 * Size: 512 × 512px (1:1 aspect ratio)
 * Scales perfectly to: 16px, 32px, 64px, 120px, 180px, 512px
 */
export function CitaBookingIcon({
  className,
  style,
  size = 512,
  iconColor = "#E8654A",
}: IconProps) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CitaBooking Icon"
    >
      <title>CitaBooking</title>

      {/* Background */}
      <rect width="512" height="512" rx="112" fill={iconColor} />

      {/* Calendar Grid - 3x2 grid of cells */}
      <rect x="96" y="128" width="80" height="80" rx="16" fill="white" />
      <rect x="216" y="128" width="80" height="80" rx="16" fill="white" />
      <rect x="336" y="128" width="80" height="80" rx="16" fill="white" />

      <rect x="96" y="248" width="80" height="80" rx="16" fill="white" />
      <rect x="216" y="248" width="80" height="80" rx="16" fill="white" />

      {/* Checkmark (confidence) */}
      <path
        d="M240 368 L304 432 L432 304"
        stroke="white"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * 3. WATERMARK (Transparent Overlay)
 * Use for: Instagram Reels, TikTok videos, YouTube shorts, portfolio photos
 * Size: Flexible (defaults to 160px)
 * Features: Outline only, adjustable opacity, no background
 */
export function CitaBookingWatermark({
  className,
  style,
  opacity = 0.22,
  color = "white",
}: WatermarkProps) {
  return (
    <svg
      className={className}
      style={{ opacity, ...style }}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CitaBooking Watermark"
    >
      <title>CitaBooking</title>

      {/* Outline container (no fill) */}
      <rect
        x="16"
        y="16"
        width="128"
        height="128"
        rx="28"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />

      {/* Grid cells (outline) */}
      <rect x="36" y="36" width="24" height="24" rx="6" stroke={color} strokeWidth="4" fill="none" />
      <rect x="68" y="36" width="24" height="24" rx="6" stroke={color} strokeWidth="4" fill="none" />
      <rect x="100" y="36" width="24" height="24" rx="6" stroke={color} strokeWidth="4" fill="none" />

      <rect x="36" y="68" width="24" height="24" rx="6" stroke={color} strokeWidth="4" fill="none" />
      <rect x="68" y="68" width="24" height="24" rx="6" stroke={color} strokeWidth="4" fill="none" />

      {/* Checkmark */}
      <path
        d="M56 104 L72 120 L104 88"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
