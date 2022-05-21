select 
	acc.id as account_id, 
	acc.name as account_name, 
	TO_CHAR(clk.created_at, 'YYYY-Mon') as month,
	count(clk.*) numclicks
from accounts as acc
left join campaigns as camp on acc.id=camp.account_id
left join clicks as clk on camp.id=clk.campaign_id
where 
	acc.active = TRUE AND 
	(select count(*) from campaigns inner_camp 
		where acc.id=inner_camp.account_id AND inner_camp.created_at >= NOW() - interval '6 month') > 0
	AND
	extract(epoch from(camp.start_date - camp.end_date)) > 7 * 24 * 3600 * 1000
group by acc.id, TO_CHAR(clk.created_at, 'YYYY-Mon')