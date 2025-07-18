// SPDX-FileCopyrightText: 2025 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences
// SPDX-FileCopyrightText: 2025 Paula Stock (GFZ) <paula.stock@gfz.de>
//
// SPDX-License-Identifier: Apache-2.0

package nl.esciencecenter.rsd;

import java.time.LocalTime;

public class Main {

	public static void main(String[] args) {
		ServiceManager serviceManager = new ServiceManager();

		String VIEW_NAME_COUNT_SOFTWARE_MENTIONS = "count_software_mentions_cached";
		Service updateCountSoftwareMentionsCached = ServiceFactory.createPeriodicService(
			"Count Software Mentions Cached Service",
			300,
			30,
			"REFRESH MATERIALIZED VIEW CONCURRENTLY %s;".formatted(VIEW_NAME_COUNT_SOFTWARE_MENTIONS)
		);

		Service deleteExpiredAccessTokens = ServiceFactory.createScheduledService(
			"Delete Expired Access Tokens Service",
			LocalTime.MIDNIGHT,
			"SELECT cleanup_expired_token()"
		);

		serviceManager.registerService(updateCountSoftwareMentionsCached);
		serviceManager.registerService(deleteExpiredAccessTokens);

		serviceManager.startAllServices();
	}
}
