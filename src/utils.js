export function isNullOrEmpty(obj) {
  return obj == null || Object.keys(obj).length === 0;
}

export function createHtml(rawHtml) {
  return { __html: rawHtml };
}

export function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}

export function getSerializableData(form) {
  const formData = new FormData(form);

  return Array.from(formData, ([k, v]) => ({ [k]: v }))
    .reduce((total, item) => {
      const t = { ...total };

      Object.entries(item).forEach(([k, v]) => {
        const [key, subKey] = k.replace(']', '').split(/[[]/);
        t[key] = subKey ? { ...t[key], [subKey]: v } : v;
      });

      return t;
    }, {});
}

export function getDateTempl(value) {
  return new Date(value)
    .toLocaleDateString('default', {
      year: 'numeric',
      month: 'long',
    });
}

export function openFileDialog(cb, accept = 'image/*') {
  const input = document.createElement('input');

  input.type = 'file';
  input.accept = accept;

  input.addEventListener('change', function (e) {
    e.preventDefault();
    cb && cb(this.files);
  });

  input.dispatchEvent(new MouseEvent('click'));
}

export const ScrollbarUtil = (() => {
  let rawSize = 0;

  const getRawSize = () => {
    if (!rawSize) {
      const el = document.createElement('div');
      el.className = 'ScrollbarMeasure'; // Заменить на style

      document.body.appendChild(el);
      rawSize = el.getBoundingClientRect().width - el.clientWidth;
      document.body.removeChild(el);
    }

    return rawSize;
  };

  const getSize = () => {
    return document.body.scrollHeight > window.innerHeight 
      ? getRawSize() : 0;
  };

  const setActive = value => {
    const { style } = document.body;
    style.overflow = value ? null : 'hidden';
    style.paddingRight = value ? null : `${getSize()}px`;
  };

  return { getRawSize, getSize, setActive };
})();