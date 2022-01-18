export interface NameDto {
  title: string;
  first: string;
  last: string;
}

export interface LoginDto {
  uuid: string;
  username: string;
}

export interface PictureDto {
  thumbnail: string;
  medium: string;
  large: string;
}
export interface UserDto {
  login: LoginDto;
  icon: string;
  name: NameDto;
  picture: PictureDto;
}

export interface UserResponse extends UserDto {}
