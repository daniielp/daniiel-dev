const Logo = (props: any) => {

    const {primary, secondary, ...otherProps} = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="31.611"
      viewBox="0 0 32 31.611"
      {...otherProps}
    >
      <g id="Group_4" data-name="Group 4" transform="translate(970.97 -442)">
        <g id="logo" transform="translate(-970.97 442)">
          <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
            <g
              id="Group_2"
              data-name="Group 2"
              transform="translate(9.894 6.425)"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M833.2,118.79v13.178h4.558V120.8l-.734-.324Z"
                transform="translate(-833.2 -112.616)"
                className={secondary}
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M833.2,66.89l4.558,2.012V62.97H833.2Z"
                transform="translate(-833.2 -62.97)"
                className={primary}
              />
              <path
                id="Path_8"
                data-name="Path 8"
                d="M902.39,70.266l1.282.566,3.277,1.447V62.97H902.39Z"
                transform="translate(-894.737 -62.97)"
                className={primary}
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M902.39,149.31v9.8h4.559v-7.789l-1.584-.7Z"
                transform="translate(-894.737 -139.76)"
                className={secondary}
              />
            </g>
            <path
              id="Path_10"
              data-name="Path 10"
              d="M771.03,31.611H749.15a10.071,10.071,0,0,1-10.12-10V0h21.881A10.07,10.07,0,0,1,771.03,10ZM742.563,3.489V21.615a6.555,6.555,0,0,0,6.588,6.507H767.5V10a6.554,6.554,0,0,0-6.587-6.507H742.564Z"
              transform="translate(-739.03)"
              className={secondary}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
