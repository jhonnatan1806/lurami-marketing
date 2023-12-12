import React from 'react';

const Title = ({ children }) => {
	return <h1 className="text-center text-xl font-bold">{children}</h1>;
};

const Subtitle = ({ children }) => {
	return <h2 className="py-2 text-base font-bold">{children}</h2>;
};

const Subsubtitle = ({ children }) => {
	return <h3 className="py-2 text-sm font-bold">{children}</h3>;
};

const Date = ({ children }) => {
	return <p className="py-2 text-sm text-justify">{children}</p>;
};

const Text = ({ children }) => {
	return <p className="text-xs text-justify">{children}</p>;
};

const List = ({ children }) => {
	return <ul className="pb-2 list-disc list-inside">{children}</ul>;
};

const ListItem = ({ children }) => {
	return <li className="text-xs text-justify">{children}</li>;
};

export const Policy = () => {
	return (
		<React.Fragment>
			<Title>Lurami Clothing Privacy Policy.</Title>
			<Date>Last updated: 12/12/2023</Date>
			<Text>
				This Privacy Policy describes how Lurami Clothing (the &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;,
				or &quot;our&quot;) collects, uses, and discloses your personal information when you visit, use our
				services, or make a purchase from luramiclothing.com (the &quot;Site&quot;) or otherwise communicate
				with us (collectively, the &quot;Services&quot;). For purposes of this Privacy Policy, &quot;you&quot;
				and &quot;your&quot; means you as the user of the Services, whether you are a customer, website visitor,
				or another individual whose information we have collected pursuant to this Privacy Policy.
			</Text>
			<Text>
				Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the
				collection, use, and disclosure of your information as described in this Privacy Policy. If you do not
				agree to this Privacy Policy, please do not use or access any of the Services.
			</Text>
			<Subtitle>Changes to This Privacy Policy</Subtitle>
			<Text>
				We may update this Privacy Policy from time to time, including to reflect changes to our practices or
				for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the
				Site, update the &quot;Last updated&quot; date and take any other steps required by applicable law.
			</Text>
			<Subtitle>How We Collect and Use Your Personal Information</Subtitle>
			<Text>
				To provide the Services, we collect and have collected over the past 12 months personal information
				about you from a variety of sources, as set out below. The information that we collect and use varies
				depending on how you interact with us.
			</Text>
			<Text>
				In addition to the specific uses set out below, we may use information we collect about you to
				communicate with you, provide the Services, comply with any applicable legal obligations, enforce any
				applicable terms of service, and to protect or defend the Services, our rights, and the rights of our
				users or others.
			</Text>
			<Subtitle>What Personal Information We Collect</Subtitle>
			<Text>
				The types of personal information we obtain about you depends on how you interact with our Site and use
				our Services. When we use the term &quot;personal information&quot;, we are referring to information
				that identifies, relates to, describes or can be associated with you. The following sections describe
				the categories and specific types of personal information we collect.
			</Text>
			<Subtitle>Information We Collect Directly from You</Subtitle>
			<Text>Information that you directly submit to us through our Services may include:</Text>
			<List>
				<ListItem>Basic contact details including your name, address, phone number, email.</ListItem>
				<ListItem>
					Order information including your name, billing address, shipping address, payment confirmation,
					email address, phone number.
				</ListItem>
				<ListItem>Account information including your username, password, security questions.</ListItem>
				<ListItem>
					Shopping information including the items you view, put in your cart or add to your wishlist.
				</ListItem>
				<ListItem>
					Customer support information including the information you choose to include in communications with
					us, for example, when sending a message through the Services.
				</ListItem>
			</List>
			<Text>
				Some features of the Services may require you to directly provide us with certain information about
				yourself. You may elect not to provide this information, but doing so may prevent you from using or
				accessing these features.
			</Text>
			<Subtitle>Information We Collect through Cookies</Subtitle>
			<Text>
				We also automatically collect certain information about your interaction with the Services (&quot;Usage
				Data&quot;). To do this, we may use cookies, pixels and similar technologies (&quot;Cookies&quot;).
				Usage Data may include information about how you access and use our Site and your account, including
				device information, browser information, information about your network connection, your IP address and
				other information regarding your interaction with the Services.
			</Text>
			<Subtitle>Information We Obtain from Third Parties</Subtitle>
			<Text>
				Finally, we may obtain information about you from third parties, including from vendors and service
				providers who may collect information on our behalf, such as:
			</Text>
			<List>
				<ListItem>Companies who support our Site and Services, such as Shopify.</ListItem>
				<ListItem>
					Our payment processors, who collect payment information (e.g., bank account, credit or debit card
					information, billing address) to process your payment in order to fulfill your orders and provide
					you with products or services you have requested, in order to perform our contract with you.
				</ListItem>
				<ListItem>
					When you visit our Site, open or click on emails we send you, or interact with our Services or
					advertisements, we, or third parties we work with, may automatically collect certain information
					using online tracking technologies such as pixels, web beacons, software developer kits, third-party
					libraries, and cookies.
				</ListItem>
			</List>
			<Text>
				Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We
				are not responsible or liable for the accuracy of the information provided to us by third parties and
				are not responsible for any third party&apos;s policies or practices. For more information, see the
				section below, Third Party Websites and Links.
			</Text>
			<Subtitle>How We Use Your Personal Information</Subtitle>
			<List>
				<ListItem>
					Providing Products and Services. We use your personal information to provide you with the Services
					in order to perform our contract with you, including to process your payments, fulfill your orders,
					to send notifications to you related to you account, purchases, returns, exchanges or other
					transactions, to create, maintain and otherwise manage your account, to arrange for shipping,
					facilitate any returns and exchanges and to enable you to post reviews.
				</ListItem>
				<ListItem>
					Marketing and Advertising. We use your personal information for marketing and promotional purposes,
					such as to send marketing, advertising and promotional communications by email, text message or
					postal mail, and to show you advertisements for products or services. This may include using your
					personal information to better tailor the Services and advertising on our Site and other websites.
				</ListItem>
				<ListItem>
					Security and Fraud Prevention. We use your personal information to detect, investigate or take
					action regarding possible fraudulent, illegal or malicious activity. If you choose to use the
					Services and register an account, you are responsible for keeping your account credentials safe. We
					highly recommend that you do not share your username, password, or other access details with anyone
					else. If you believe your account has been compromised, please contact us immediately.
				</ListItem>
				<ListItem>
					Communicating with you. We use your personal information to provide you with customer support and
					improve our Services. This is in our legitimate interests in order to be responsive to you, to
					provide effective services to you, and to maintain our business relationship with you.
				</ListItem>
			</List>
			<Subtitle>Cookies</Subtitle>
			<Text>
				Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use
				related to powering our store with Shopify, see https://www.shopify.com/legal/cookies. We use Cookies to
				power and improve our Site and our Services (including to remember your actions and preferences), to run
				analytics and better understand user interaction with the Services (in our legitimate interests to
				administer, improve and optimize the Services). We may also permit third parties and services providers
				to use Cookies on our Site to better tailor the services, products and advertising on our Site and other
				websites.
			</Text>
			<Text>
				Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove
				or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies
				can negatively impact your user experience and may cause some of the Services, including certain
				features and general functionality, to work incorrectly or no longer be available. Additionally,
				blocking Cookies may not completely prevent how we share information with third parties such as our
				advertising partners.
			</Text>
			<Subtitle>How We Disclose Personal Information</Subtitle>
			<Text>
				In certain circumstances, we may disclose your personal information to third parties for legitimate
				purposes subject to this Privacy Policy. Such circumstances may include:
			</Text>
			<List>
				<ListItem>
					With vendors or other third parties who perform services on our behalf (e.g., IT management, payment
					processing, data analytics, customer support, cloud storage, fulfillment and shipping).
				</ListItem>
				<ListItem>
					With business and marketing partners, including Shopify, to provide services and advertise to you.
					Our business and marketing partners will use your information in accordance with their own privacy
					notices.
				</ListItem>
				<ListItem>
					When you direct, request us or otherwise consent to our disclosure of certain information to third
					parties, such as to ship you products or through your use of social media widgets or login
					integrations, with your consent.
				</ListItem>
				<ListItem>
					With our affiliates or otherwise within our corporate group, in our legitimate interests to run a
					successful business.
				</ListItem>
				<ListItem>
					In connection with a business transaction such as a merger or bankruptcy, to comply with any
					applicable legal obligations (including to respond to subpoenas, search warrants and similar
					requests), to enforce any applicable terms of service, and to protect or defend the Services, our
					rights, and the rights of our users or others.
				</ListItem>
			</List>
			<Text>
				We have, in the past 12 months disclosed the following categories of personal information and sensitive
				personal information (denoted by *) about users for the purposes set out above in &quot;How we Collect
				and Use your Personal Information&quot; and &quot;How we Disclose Personal Information&quot;:
			</Text>
			<Subsubtitle>Category</Subsubtitle>
			<List>
				<ListItem>Identifiers such as basic contact details and certain order and account information</ListItem>
				<ListItem>
					Commercial information such as order information, shopping information and customer support
					information
				</ListItem>
				<ListItem>Internet or other similar network activity, such as Usage Data </ListItem>
			</List>
			<Subsubtitle>Categories of Recipients</Subsubtitle>
			<List>
				<ListItem>
					Vendors and third parties who perform services on our behalf (such as Internet service providers,
					payment processors, fulfillment partners, customer support partners and data analytics providers)
				</ListItem>
				<ListItem>Business and marketing partners</ListItem>
				<ListItem>Affiliates</ListItem>
			</List>
			<Text>
				We do not use or disclose sensitive personal information for the purposes of inferring characteristics
				about you.
			</Text>
			<Text>
				We have &quot;sold&quot; and &quot;shared&quot; (as those terms are defined in applicable law) personal
				information over the preceding 12 months for the purpose of engaging in advertising and marketing
				activities, as follows.
			</Text>
			<Subsubtitle>Category of Personal Information</Subsubtitle>
			<List>
				<ListItem>Identifiers such as basic contact details and certain order and account information</ListItem>
				<ListItem>
					Commercial information such as records of products or services purchased and shopping information
				</ListItem>
				<ListItem>Internet or other similar network activity, such as Usage Data </ListItem>
			</List>
			<Subsubtitle>Categories of Recipients</Subsubtitle>
			<List>
				<ListItem>Business and marketing partners</ListItem>
			</List>
			<Subtitle>User Generated Content</Subtitle>
			<Text>
				The Services may enable you to post product reviews and other user-generated content. If you choose to
				submit user generated content to any public area of the Services, this content will be public and
				accessible by anyone.
			</Text>
			<Text>
				We do not control who will have access to the information that you choose to make available to others,
				and cannot ensure that parties who have access to such information will respect your privacy or keep it
				secure. We are not responsible for the privacy or security of any information that you make publicly
				available, or for the accuracy, use or misuse of any information that you disclose or receive from third
				parties.
			</Text>
			<Subtitle>Third Party Websites and Links</Subtitle>
			<Text>
				Our Site may provide links to websites or other online platforms operated by third parties. If you
				follow links to sites not affiliated or controlled by us, you should review their privacy and security
				policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or
				security of such sites, including the accuracy, completeness, or reliability of information found on
				these sites. Information you provide on public or semi-public venues, including information you share on
				third-party social networking platforms may also be viewable by other users of the Services and/or users
				of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion
				of such links does not, by itself, imply any endorsement of the content on such platforms or of their
				owners or operators, except as disclosed on the Services.
			</Text>
			<Subtitle>Children&apos;s Data</Subtitle>
			<Text>
				The Services are not intended to be used by children, and we do not knowingly collect any personal
				information about children. If you are the parent or guardian of a child who has provided us with their
				personal information, you may contact us using the contact details set out below to request that it be
				deleted.
			</Text>
			<Text>
				As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we
				&quot;share&quot; or &quot;sell&quot; (as those terms are defined in applicable law) personal
				information of individuals under 16 years of age.
			</Text>
			<Subtitle>Security and Retention of Your Information</Subtitle>
			<Text>
				Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee
				&quot;perfect security.&quot; In addition, any information you send to us may not be secure while in
				transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential
				information to us.
			</Text>
			<Text>
				How long we retain your personal information depends on different factors, such as whether we need the
				information to maintain your account, to provide the Services, comply with legal obligations, resolve
				disputes or enforce other applicable contracts and policies.
			</Text>
			<Subtitle>Your Rights and Choices</Subtitle>
			<Text>
				Depending on where you live, you may have some or all of the rights listed below in relation to your
				personal information. However, these rights are not absolute, may apply only in certain circumstances
				and, in certain cases, we may decline your request as permitted by law.
			</Text>
			<List>
				<ListItem>
					Right to Access / Know. You may have a right to request access to personal information that we hold
					about you, including details relating to the ways in which we use and share your information.
				</ListItem>
				<ListItem>
					Right to Delete. You may have a right to request that we delete personal information we maintain
					about you.
				</ListItem>
				<ListItem>
					Right to Correct. You may have a right to request that we correct inaccurate personal information we
					maintain about you.
				</ListItem>
				<ListItem>
					Right of Portability. You may have a right to receive a copy of the personal information we hold
					about you and to request that we transfer it to a third party, in certain circumstances and with
					certain exceptions.
				</ListItem>
				<ListItem>
					Right to Opt out of Sale or Sharing or Targeted Advertising. You may have a right to direct us not
					to &quot;sell&quot; or &quot;share&quot; your personal information or to opt out of the processing
					of your personal information for purposes considered to be &quot;targeted advertising&quot;, as
					defined in applicable privacy laws. Please note that if you visit our Site with the Global Privacy
					Control opt-out preference signal enabled, depending on where you are, we will automatically
				</ListItem>
			</List>
		</React.Fragment>
	);
};
