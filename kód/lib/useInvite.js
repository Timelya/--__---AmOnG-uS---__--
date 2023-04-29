

export default function useInvite({
	redirectTo = "",
	redirectIfFound = false,
} = {}) {
	const { data: invite, mutate: mutateInvite } = useSWR("/api/invite");

	useEffect(() => {
		if (!redirectTo || !invite) return;

		if (
			(redirectTo && !redirectIfFound && !invite?.isLoggedIn) ||
			(redirectIfFound && invite?.isLoggedIn)
		) {
			Router.push(redirectTo);
		}
	}, [invite, redirectIfFound, redirectTo]);

	return { invite, mutateInvite };
}
