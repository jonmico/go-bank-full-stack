interface Error {
  errorCode?: number;
  errorMessage: string;
}

export async function handleFetch<T>(
  fetchFn: () => Promise<Response>
): Promise<{
  data?: T | undefined;
  error?: Error | undefined;
}> {
  try {
    const res = await fetchFn();

    if (!res.ok) {
      const errorData: { error: string } = await res.json();

      const error: Error = {
        errorCode: res.status,
        errorMessage: errorData.error,
      };

      return { data: undefined, error };
    }

    const data = await res.json();

    return { data, error: undefined };
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof Error) {
      return { data: undefined, error: { errorMessage: err.message } };
    } else {
      return {
        data: undefined,
        error: {
          errorMessage: 'Something went wrong. Check error logs in console.',
        },
      };
    }
  }
}
