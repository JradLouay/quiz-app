import MenuItem from "./MenuItem";

const topics: object[] = [
  {
    title: "Html",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H48C52.4183 0 56 3.58172 56 8V48C56 52.4183 52.4183 56 48 56H8C3.58172 56 0 52.4183 0 48V8Z"
          fill="#FFF1E9"
        />
        <path
          d="M32.5075 15.6075C32.6576 15.6741 32.793 15.7697 32.9062 15.8886C33.0193 16.0076 33.1078 16.1477 33.1668 16.301C33.2258 16.4542 33.254 16.6175 33.2498 16.7816C33.2457 16.9458 33.2092 17.1075 33.1425 17.2575L23.1425 39.7575C23.0079 40.0605 22.7585 40.2976 22.449 40.4167C22.1396 40.5358 21.7955 40.5271 21.4925 40.3925C21.1895 40.2579 20.9524 40.0084 20.8333 39.699C20.7142 39.3896 20.7229 39.0455 20.8575 38.7425L30.8575 16.2425C30.9242 16.0924 31.0197 15.957 31.1387 15.8439C31.2577 15.7308 31.3978 15.6422 31.551 15.5832C31.7042 15.5242 31.8676 15.496 32.0317 15.5002C32.1958 15.5044 32.3575 15.5408 32.5075 15.6075ZM18.8325 21.44C18.955 21.5493 19.0547 21.6817 19.126 21.8296C19.1973 21.9774 19.2388 22.1379 19.2481 22.3018C19.2574 22.4657 19.2343 22.6298 19.1801 22.7848C19.126 22.9397 19.0419 23.0825 18.9325 23.205L14.675 28L18.9375 32.795C19.0465 32.9178 19.1303 33.0608 19.184 33.216C19.2377 33.3711 19.2603 33.5353 19.2506 33.6992C19.2408 33.8631 19.1989 34.0235 19.1272 34.1712C19.0554 34.3189 18.9553 34.451 18.8325 34.56C18.7097 34.669 18.5667 34.7527 18.4115 34.8064C18.2564 34.8602 18.0922 34.8828 17.9283 34.873C17.7644 34.8633 17.604 34.8214 17.4563 34.7496C17.3086 34.6779 17.1765 34.5778 17.0675 34.455L12.0675 28.83C11.8644 28.6012 11.7522 28.3059 11.7522 28C11.7522 27.6941 11.8644 27.3988 12.0675 27.17L17.0675 21.545C17.1765 21.4222 17.3086 21.322 17.4563 21.2503C17.604 21.1785 17.7644 21.1366 17.9283 21.1268C18.0922 21.1171 18.2564 21.1397 18.4116 21.1935C18.5667 21.2472 18.7098 21.331 18.8325 21.44ZM37.17 21.44C37.2928 21.331 37.4359 21.2472 37.591 21.1935C37.7462 21.1397 37.9104 21.1171 38.0743 21.1268C38.2382 21.1366 38.3986 21.1785 38.5463 21.2503C38.6939 21.322 38.8261 21.4222 38.935 21.545L43.935 27.17C44.1382 27.3988 44.2504 27.6941 44.2504 28C44.2504 28.3059 44.1382 28.6012 43.935 28.83L38.935 34.455C38.826 34.5778 38.6939 34.6779 38.5462 34.7496C38.3985 34.8214 38.2382 34.8633 38.0743 34.873C37.9104 34.8828 37.7462 34.8602 37.591 34.8064C37.4359 34.7527 37.2928 34.669 37.17 34.56C37.0472 34.451 36.9471 34.3189 36.8754 34.1712C36.8037 34.0235 36.7617 33.8631 36.752 33.6992C36.7422 33.5353 36.7649 33.3711 36.8186 33.216C36.8723 33.0608 36.956 32.9178 37.065 32.795L41.3275 28L37.065 23.205C36.956 23.0822 36.8722 22.9392 36.8185 22.784C36.7648 22.6289 36.7421 22.4646 36.7519 22.3007C36.7616 22.1368 36.8036 21.9765 36.8753 21.8288C36.9471 21.6811 37.0472 21.549 37.17 21.44Z"
          fill="#FF7E35"
        />
      </svg>
    ),
  },
  {
    title: "CSS",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H48C52.4183 0 56 3.58172 56 8V48C56 52.4183 52.4183 56 48 56H8C3.58172 56 0 52.4183 0 48V8Z"
          fill="#E0FDEF"
        />
        <path
          d="M18 10.505C17.6685 10.505 17.3505 10.6367 17.1161 10.8711C16.8817 11.1055 16.75 11.4235 16.75 11.755V29.25C16.75 30.5761 17.2768 31.8478 18.2145 32.7855C19.1521 33.7232 20.4239 34.25 21.75 34.25H23V40.5C23 41.1563 23.1293 41.8061 23.3804 42.4125C23.6316 43.0188 23.9997 43.5697 24.4637 44.0338C24.9278 44.4978 25.4787 44.8659 26.085 45.1171C26.6914 45.3682 27.3412 45.4975 27.9975 45.4975C28.6538 45.4975 29.3036 45.3682 29.91 45.1171C30.5163 44.8659 31.0672 44.4978 31.5313 44.0338C31.9953 43.5697 32.3634 43.0188 32.6146 42.4125C32.8657 41.8061 32.995 41.1563 32.995 40.5V34.25H34.25C35.5761 34.25 36.8479 33.7232 37.7855 32.7855C38.7232 31.8478 39.25 30.5761 39.25 29.25V11.755C39.25 11.4235 39.1183 11.1055 38.8839 10.8711C38.6495 10.6367 38.3315 10.505 38 10.505H18ZM36.75 25.5H19.25V13.005H26.75V16.76C26.75 17.0915 26.8817 17.4095 27.1161 17.6439C27.3505 17.8783 27.6685 18.01 28 18.01C28.3315 18.01 28.6495 17.8783 28.8839 17.6439C29.1183 17.4095 29.25 17.0915 29.25 16.76V13.005H31.75V19.245C31.75 19.5765 31.8817 19.8945 32.1161 20.1289C32.3505 20.3633 32.6685 20.495 33 20.495C33.3315 20.495 33.6495 20.3633 33.8839 20.1289C34.1183 19.8945 34.25 19.5765 34.25 19.245V13.005H36.75V25.5ZM19.25 29.25V28H36.75V29.25C36.75 29.913 36.4866 30.5489 36.0178 31.0178C35.5489 31.4866 34.913 31.75 34.25 31.75H31.745C31.4135 31.75 31.0955 31.8817 30.8611 32.1161C30.6267 32.3505 30.495 32.6685 30.495 33V40.5C30.495 41.1624 30.2319 41.7976 29.7635 42.266C29.2951 42.7344 28.6599 42.9975 27.9975 42.9975C27.3351 42.9975 26.6999 42.7344 26.2315 42.266C25.7631 41.7976 25.5 41.1624 25.5 40.5V33C25.5 32.6685 25.3683 32.3505 25.1339 32.1161C24.8995 31.8817 24.5815 31.75 24.25 31.75H21.75C21.087 31.75 20.4511 31.4866 19.9822 31.0178C19.5134 30.5489 19.25 29.913 19.25 29.25Z"
          fill="#2FD887"
        />
      </svg>
    ),
  },
  {
    title: "Javascript",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H48C52.4183 0 56 3.58172 56 8V48C56 52.4183 52.4183 56 48 56H8C3.58172 56 0 52.4183 0 48V8Z"
          fill="#EBF0FF"
        />
        <path
          d="M29.25 26.75C29.25 25.7554 29.6451 24.8016 30.3483 24.0983C31.0516 23.3951 32.0054 23 33 23H36.75C37.0815 23 37.3995 23.1317 37.6339 23.3661C37.8683 23.6005 38 23.9185 38 24.25C38 24.5815 37.8683 24.8995 37.6339 25.1339C37.3995 25.3683 37.0815 25.5 36.75 25.5H33C32.6685 25.5 32.3505 25.6317 32.1161 25.8661C31.8817 26.1005 31.75 26.4185 31.75 26.75V28C31.75 28.3315 31.8817 28.6495 32.1161 28.8839C32.3505 29.1183 32.6685 29.25 33 29.25H34.25C35.2446 29.25 36.1984 29.6451 36.9017 30.3483C37.6049 31.0516 38 32.0054 38 33V34.25C38 35.2446 37.6049 36.1984 36.9017 36.9017C36.1984 37.6049 35.2446 38 34.25 38H30.5C30.1685 38 29.8505 37.8683 29.6161 37.6339C29.3817 37.3995 29.25 37.0815 29.25 36.75C29.25 36.4185 29.3817 36.1005 29.6161 35.8661C29.8505 35.6317 30.1685 35.5 30.5 35.5H34.25C34.5815 35.5 34.8995 35.3683 35.1339 35.1339C35.3683 34.8995 35.5 34.5815 35.5 34.25V33C35.5 32.6685 35.3683 32.3505 35.1339 32.1161C34.8995 31.8817 34.5815 31.75 34.25 31.75H33C32.0054 31.75 31.0516 31.3549 30.3483 30.6517C29.6451 29.9484 29.25 28.9946 29.25 28V26.75ZM28 24.25C28 23.9185 27.8683 23.6005 27.6339 23.3661C27.3995 23.1317 27.0815 23 26.75 23C26.4185 23 26.1005 23.1317 25.8661 23.3661C25.6317 23.6005 25.5 23.9185 25.5 24.25V34.25C25.5 34.5815 25.3683 34.8995 25.1339 35.1339C24.8995 35.3683 24.5815 35.5 24.25 35.5H21.75C21.4185 35.5 21.1005 35.6317 20.8661 35.8661C20.6317 36.1005 20.5 36.4185 20.5 36.75C20.5 37.0815 20.6317 37.3995 20.8661 37.6339C21.1005 37.8683 21.4185 38 21.75 38H24.25C25.2446 38 26.1984 37.6049 26.9017 36.9017C27.6049 36.1984 28 35.2446 28 34.25V24.25ZM13 19.25C13 17.5924 13.6585 16.0027 14.8306 14.8306C16.0027 13.6585 17.5924 13 19.25 13H36.75C38.4076 13 39.9973 13.6585 41.1694 14.8306C42.3415 16.0027 43 17.5924 43 19.25V36.75C43 38.4076 42.3415 39.9973 41.1694 41.1694C39.9973 42.3415 38.4076 43 36.75 43H19.25C17.5924 43 16.0027 42.3415 14.8306 41.1694C13.6585 39.9973 13 38.4076 13 36.75V19.25ZM19.25 15.5C18.2554 15.5 17.3016 15.8951 16.5983 16.5983C15.8951 17.3016 15.5 18.2554 15.5 19.25V36.75C15.5 37.7446 15.8951 38.6984 16.5983 39.4017C17.3016 40.1049 18.2554 40.5 19.25 40.5H36.75C37.7446 40.5 38.6984 40.1049 39.4017 39.4017C40.1049 38.6984 40.5 37.7446 40.5 36.75V19.25C40.5 18.2554 40.1049 17.3016 39.4017 16.5983C38.6984 15.8951 37.7446 15.5 36.75 15.5H19.25Z"
          fill="#306AFF"
        />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H48C52.4183 0 56 3.58172 56 8V48C56 52.4183 52.4183 56 48 56H8C3.58172 56 0 52.4183 0 48V8Z"
          fill="#F6E7FF"
        />
        <path
          d="M24.875 16.125C24.875 15.2962 25.2043 14.5013 25.7903 13.9153C26.3764 13.3292 27.1712 13 28 13C28.8288 13 29.6237 13.3292 30.2097 13.9153C30.7958 14.5013 31.125 15.2962 31.125 16.125C31.125 16.9538 30.7958 17.7487 30.2097 18.3347C29.6237 18.9208 28.8288 19.25 28 19.25C27.1712 19.25 26.3764 18.9208 25.7903 18.3347C25.2043 17.7487 24.875 16.9538 24.875 16.125ZM28 10.5C27.1517 10.5 26.3143 10.6919 25.5506 11.0614C24.7869 11.4308 24.1167 11.9682 23.59 12.6333C23.0634 13.2984 22.6941 14.0741 22.5097 14.9021C22.3252 15.7302 22.3305 16.5893 22.525 17.415L18.495 15.79C17.5172 15.3962 16.4235 15.4043 15.4516 15.8125C14.4798 16.2207 13.7083 16.9961 13.305 17.97C13.1054 18.4523 13.0034 18.9694 13.0048 19.4914C13.0062 20.0134 13.1111 20.5299 13.3133 21.0111C13.5156 21.4923 13.8112 21.9286 14.1831 22.2949C14.555 22.6612 14.9958 22.9501 15.48 23.145L20.5 25.1725V31.1325L15.9675 39.6575C15.7221 40.1188 15.57 40.6239 15.5198 41.1439C15.4696 41.664 15.5223 42.1889 15.6749 42.6886C15.8275 43.1883 16.0771 43.653 16.4094 44.0562C16.7416 44.4595 17.15 44.7933 17.6113 45.0388C18.5429 45.5344 19.6332 45.6396 20.6423 45.3314C21.6515 45.0231 22.4969 44.3266 22.9925 43.395L28 33.975L33.01 43.395C33.5053 44.3266 34.3504 45.0232 35.3593 45.3317C36.3683 45.6402 37.4585 45.5353 38.39 45.04C39.3216 44.5447 40.0183 43.6996 40.3268 42.6907C40.6353 41.6817 40.5303 40.5916 40.035 39.66L35.5 31.13V25.1725L40.52 23.145C41.0043 22.9501 41.4451 22.6612 41.817 22.2949C42.1889 21.9286 42.4845 21.4923 42.6868 21.0111C42.889 20.5299 42.9939 20.0134 42.9953 19.4914C42.9967 18.9694 42.8947 18.4523 42.695 17.97C42.2922 16.9956 41.521 16.2197 40.549 15.811C39.5771 15.4023 38.4831 15.3938 37.505 15.7875L33.4775 17.415C33.6721 16.589 33.6773 15.7298 33.4928 14.9015C33.3082 14.0733 32.9386 13.2975 32.4117 12.6323C31.8848 11.9671 31.2143 11.4298 30.4503 11.0605C29.6863 10.6913 28.8486 10.4996 28 10.5ZM15.6175 18.9225C15.7688 18.5588 16.057 18.2692 16.42 18.1163C16.783 17.9633 17.1916 17.9593 17.5575 18.105L26.1275 21.5675C27.3287 22.0527 28.6713 22.0527 29.8725 21.5675L38.4425 18.105C38.8085 17.9593 39.217 17.9633 39.58 18.1163C39.943 18.2692 40.2313 18.5588 40.3825 18.9225C40.4566 19.0999 40.4946 19.2903 40.4944 19.4826C40.4942 19.6749 40.4558 19.8652 40.3813 20.0425C40.3069 20.2198 40.1979 20.3805 40.0608 20.5152C39.9236 20.65 39.7611 20.7561 39.5825 20.8275L34.5625 22.8525C34.1001 23.0396 33.7042 23.3607 33.4258 23.7746C33.1473 24.1885 32.999 24.6762 33 25.175V31.1325C32.9998 31.5422 33.1002 31.9457 33.2925 32.3075L37.8275 40.835C37.9915 41.179 38.0165 41.573 37.8972 41.935C37.7779 42.297 37.5236 42.5989 37.1872 42.7781C36.8508 42.9572 36.4583 42.9997 36.0914 42.8967C35.7245 42.7937 35.4115 42.5531 35.2175 42.225L30.2075 32.8C29.9946 32.3994 29.6766 32.0643 29.2877 31.8306C28.8989 31.5969 28.4537 31.4734 28 31.4734C27.5463 31.4734 27.1012 31.5969 26.7123 31.8306C26.3234 32.0643 26.0055 32.3994 25.7925 32.8L20.785 42.2175C20.6939 42.3889 20.57 42.5406 20.4202 42.6641C20.2705 42.7876 20.0979 42.8803 19.9123 42.9371C19.7267 42.9938 19.5317 43.0135 19.3385 42.9949C19.1453 42.9763 18.9577 42.9199 18.7863 42.8288C18.6149 42.7376 18.4632 42.6137 18.3397 42.4639C18.2162 42.3142 18.1235 42.1416 18.0667 41.956C18.0099 41.7704 17.9903 41.5754 18.0089 41.3822C18.0275 41.189 18.0839 41.0014 18.175 40.83L22.7075 32.305C22.8994 31.944 22.9999 31.5414 23 31.1325V25.1725C23 24.6745 22.8513 24.1879 22.5729 23.775C22.2945 23.3621 21.8992 23.0417 21.4375 22.855L16.4175 20.825C16.239 20.7536 16.0764 20.6475 15.9393 20.5127C15.8021 20.378 15.6932 20.2173 15.6187 20.04C15.5443 19.8627 15.5058 19.6724 15.5056 19.4801C15.5054 19.2878 15.5435 19.0999 15.6175 18.9225Z"
          fill="#A729F5"
        />
      </svg>
    ),
  },
];

function TopicsMenu() {
  return (
    <>
      {topics.map((topic, index) => (
        <MenuItem key={index} topic={topic} />
      ))}
    </>
  );
}

export default TopicsMenu;
