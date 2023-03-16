import React from 'react';

const BarChopper = ({ className }) => (
  <svg width="43" height="43" className={className}>
    <defs>
      <clipPath id="b-chopper">
        <use xlinkHref="#-chopper" />
      </clipPath>
      <image
        width="52"
        height="47"
        xlinkHref="data:image/png;base64,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"
        id="c-chopper"
      />
      <path
        d="M21.499 0h.002q.528 0 1.055.026.527.026 1.052.078.526.051 1.048.129.522.077 1.04.18.517.103 1.029.231.512.129 1.017.282.505.153 1.002.33.497.179.984.38.488.202.965.428.477.226.943.475.465.248.918.52.452.271.891.564.439.293.863.608.424.314.832.649t.799.69q.39.354.764.727.373.373.728.764.354.391.689.8.335.407.65.831.313.424.607.863.293.439.564.891.272.453.52.918.25.466.475.943.225.477.428.965.202.487.38.984.177.497.33 1.002.154.505.282 1.017.128.512.23 1.03.104.517.181 1.04.078.521.13 1.047.051.525.077 1.052.026.527.026 1.055v.002q0 .528-.026 1.055-.026.527-.077 1.052-.052.526-.13 1.048-.077.522-.18 1.04-.103.517-.231 1.029-.129.512-.282 1.017-.153.505-.33 1.002-.178.497-.38.984-.203.488-.428.965-.226.477-.475.943-.248.465-.52.918-.271.452-.564.891-.294.439-.608.863t-.649.832q-.335.408-.69.799-.354.39-.727.764-.373.373-.764.728-.391.354-.8.689-.407.335-.831.65-.424.313-.863.607-.439.293-.891.564-.453.272-.918.52-.466.25-.943.475-.477.225-.965.428-.487.202-.984.38-.497.177-1.002.33-.505.154-1.017.282-.512.128-1.03.23-.517.104-1.04.181-.521.078-1.047.13-.525.051-1.052.077Q22.029 43 21.5 43h-.002q-.528 0-1.055-.026-.527-.026-1.052-.077-.526-.052-1.048-.13-.522-.077-1.04-.18-.517-.103-1.029-.231-.512-.129-1.017-.282-.505-.153-1.002-.33-.497-.178-.984-.38-.488-.203-.965-.428-.477-.226-.943-.475-.465-.248-.918-.52-.452-.271-.891-.564-.439-.294-.863-.608t-.832-.649q-.408-.335-.799-.69-.39-.354-.764-.727-.373-.373-.728-.764-.354-.391-.689-.8-.335-.407-.65-.831-.314-.424-.607-.863t-.564-.891q-.272-.453-.52-.918-.25-.466-.475-.943-.226-.477-.427-.965-.202-.487-.38-.984t-.331-1.002q-.153-.505-.282-1.017-.128-.512-.23-1.03-.104-.517-.181-1.04-.078-.521-.13-1.047-.051-.525-.077-1.052Q0 22.029 0 21.5v-.002q0-.528.026-1.055.026-.527.078-1.052.051-.526.129-1.048.077-.522.18-1.04.103-.517.231-1.029.129-.512.282-1.017.153-.505.33-1.002.179-.497.38-.984.202-.488.428-.965.226-.477.475-.943.248-.465.52-.918.271-.452.564-.891.293-.439.608-.863.314-.424.649-.832t.69-.799q.354-.39.727-.764.373-.373.764-.728.391-.354.8-.689.407-.335.831-.65.424-.314.863-.607t.891-.564q.453-.272.918-.52.466-.25.943-.475.477-.226.965-.427.487-.202.984-.38t1.002-.331q.505-.153 1.017-.282.512-.128 1.03-.23.517-.104 1.04-.181.521-.078 1.047-.13.525-.051 1.052-.077Q20.971 0 21.5 0z"
        id="-chopper"
      />
    </defs>
    <use fill="#FFF" xlinkHref="#-chopper" />
    <g clipPath="url(#b-chopper)">
      <use xlinkHref="#-chopper" fill="none" stroke="#2891FF" strokeWidth="2" />
    </g>
    <use xlinkHref="#c-chopper" fill="#FFF" transform="matrix(.53846 0 0 .527 9 9.115)" />
  </svg>
);

export default BarChopper;