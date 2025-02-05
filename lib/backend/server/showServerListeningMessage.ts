import type http from "node:http";
import type https from "node:https";
import type { AddressInfo } from "node:net";


type InSiteServer = {
	icon: string;
	name: string;
	protocol: string;
	server: http.Server | https.Server;
};


export function showServerListeningMessage(server: InSiteServer) {
	
	const { address, family, port } = server.server.address() as AddressInfo;
	
	console.info(
		`${server.icon} inSite ${server.name} Server is listening on`,
		`${server.protocol}://${
			family === "IPv4" ?
				address : (
					address.replace(/^::(?:ffff:)?/, "") ||
					process.env.NODE_ENV === "development" ? "localhost" : "127.0.0.1"
				)
		}:${port}`
	);
	
}
