export function getEnv(env: string | undefined) {

	if (env) return env;
	
	throw new Error(`Fail ${env}`);
}
