import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Img_1 from '@/assets/images/1.jpg';
import Img_2 from '@/assets/images/5.jpg';
import Img_3 from '@/assets/images/6.jpg';
import Img_4 from '@/assets/images/7.jpg';

export default function GroupedAvatar() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="actor 1" src={Img_2.src} />
      <Avatar alt="actor 2" src={Img_3.src} />
      <Avatar alt="actor 3" src={Img_4.src} />
      <Avatar alt="actor 4" src={Img_1.src} />
      <Avatar alt="actor 5" src="" />
    </AvatarGroup>
  );
}
