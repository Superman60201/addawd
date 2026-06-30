(function initstatsconfig(globalscope) {
  const defaultstatsconfig = {
    endpoint: "https://orchard.vinetrap.net/keys",
    heartbeat_path: "/stats/heartbeat",
    stats_path: "/stats.txt",
    heartbeat_interval_ms: 30000,
  };

  globalscope.drweb_stats_config = {
    ...defaultstatsconfig,
    ...(globalscope.drweb_stats_config ?? {}),
  };
  globalscope.drwebStatsConfig = globalscope.drweb_stats_config;
})(window);
