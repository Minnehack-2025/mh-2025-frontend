import React from 'react';
import './styles/profile.css';
import Image from 'next/image';

interface ProfileProps {
    name: string;
    bio: string;
    avatarUrl: string;
    backgroundUrl?: string;
    socialLinks?: { platform: string, url: string }[];
}
    const Profile: React.FC<ProfileProps> = ({ name, bio, avatarUrl, backgroundUrl, socialLinks }) => {
    return (
        <div className="profile" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <Image src={avatarUrl} alt={`${name}'s avatar`} className="profile-avatar" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-bio">{bio}</p>
            {socialLinks && (
                <div className="profile-social-links">
                    {socialLinks.map(link => (
                        <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.platform}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
    }
export default Profile;              

