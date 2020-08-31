import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ glyph }) => {
  const [spriteId, setSpriteId] = useState(null);

  useEffect(() => {
    if (!glyph) {
      return;
    }

    const file = `${glyph}.svg`;
    import(`public/glyphs/${file}`)
      .then(({ default: spriteSymbol }) => setSpriteId(spriteSymbol.id))
      .catch(error => {
        if (error.code && error.code === 'MODULE_NOT_FOUND') {
          throw new Error(`Icon ${file} not found`);
        } else {
          throw error;
        }
      });
  }, [glyph]);

  return spriteId && (
    <svg className="Icon">
      <use xlinkHref={`#${spriteId}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
};

export default Icon;