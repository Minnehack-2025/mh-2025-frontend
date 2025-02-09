import React from 'react';
import Image from 'next/image';
import Picture from '@/images/ss.png';

interface ProfileProps {
    name: string;
    bio: string;
    socialLinks?: { platform: string, url: string }[];
}
    const Profile: React.FC<ProfileProps> = ({ name, bio, socialLinks }) => {
    return (
        <div>
            <Image src={Picture} alt={`${name}'s avatar`} className="profile-avatar" />
            <h2 className="profile-name">{name}</h2>
            <p className="profile-bio">{bio}</p>
            {socialLinks && (
                <div className="profile-social-links">
                </div>
            )}
        </div>
    );
    }
export default Profile;              

