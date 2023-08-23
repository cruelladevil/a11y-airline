type AnnouncerProps = {
  text: string;
};

const Announcer = ({ text, ...props }: AnnouncerProps) => {
  return (
    <div
      style={{
        position: 'absolute',
        visibility: 'visible',
        overflow: 'hidden',
        display: 'block',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: '0',
        padding: '0',
        clip: 'rect(0px, 0px, 0px, 0px)',
        clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
        whiteSpace: 'nowrap',
      }}
      aria-live="polite"
      aria-relevant="additions text"
      aria-atomic
      {...props}
    >
      {text.length > 0 ? <p>{text}</p> : null}
    </div>
  );
};

export default Announcer;
