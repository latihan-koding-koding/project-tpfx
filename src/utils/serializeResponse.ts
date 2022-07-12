export const serializeResponse = (props: {
  id: bigint;
  created_at: Date | null;
  updated_at: Date | null;
}) => ({
  ...props,
  id: Number(props.id || 0),
  created_at: props.created_at?.toISOString() || null,
  updated_at: props.updated_at?.toISOString() || null
});
