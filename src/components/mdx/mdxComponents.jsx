import { AirtableBase, AirtableForm } from "mdx-embed/dist/components/airtable";
import { Buzzsprout } from "mdx-embed/dist/components/buzzsprout";
import { Cinnamon } from "mdx-embed/dist/components/cinnamon";
import { CodePen } from "mdx-embed/dist/components/codepen";
import { CodeSandbox } from "mdx-embed/dist/components/codesandbox";
import { EggheadLesson } from "mdx-embed/dist/components/egghead";
import { Figma } from "mdx-embed/dist/components/figma";
import { Flickr } from "mdx-embed/dist/components/flickr";
import { Gist } from "mdx-embed/dist/components/gist";
import { Instagram } from "mdx-embed/dist/components/instagram";
import { Lbry } from "mdx-embed/dist/components/lbry";
import { LinkedInBadge } from "mdx-embed/dist/components/linkedin";
import { Pin, PinterestBoard, PinterestFollowButton } from "mdx-embed/dist/components/pinterest";
import { Replit } from "mdx-embed/dist/components/replit";
import { SimplecastEpisode } from "mdx-embed/dist/components/simplecast";
import { Snack } from "mdx-embed/dist/components/snack";
import { SoundCloud } from "mdx-embed/dist/components/soundcloud";
import { Spotify } from "mdx-embed/dist/components/spotify";
import { TikTok } from "mdx-embed/dist/components/tiktok";
import { Twitch } from "mdx-embed/dist/components/twitch";
import { Tweet, TwitterFollowButton, TwitterHashtagButton, TwitterList, TwitterMentionButton, TwitterTimeline } from "mdx-embed/dist/components/twitter";
import { Vimeo } from "mdx-embed/dist/components/vimeo";
import { Whimsical } from "mdx-embed/dist/components/whimsical";
import { Wikipedia } from "mdx-embed/dist/components/wikipedia";
import { Wistia } from "mdx-embed/dist/components/wistia";
import { YouTube } from "mdx-embed/dist/components/youtube";

import { Callout, Card, Cards, FileTree, Steps, Tabs } from 'nextra/components'

import Readme from '@/components/github/readme'
import Flash from '@/components/flash/flash'
import FlashArt from '@/components/flash/art'
import Ruffle from '@/components/flash/ruffle'
import { Button } from '@/components/ui/button'
import Image from "@/components/mdx/image";
import ThickText from "@/components/mdx/thick-text";
import GithubLink from "./github-link";


export const componentMap = {
	// NextJS
	// custom
	Readme,
	Flash,
	FlashArt,
	Ruffle,
	ThickText,
	Image,
	GithubLink,

	// ShadCN
	Button,

	// nextra
	Callout,
	Card,
	Cards,
	FileTree,
	Steps,
	Tabs,

	// mdx-embed
	AirtableBase,
	AirtableForm,
	Buzzsprout,
	Cinnamon,
	CodePen,
	CodeSandbox,
	EggheadLesson,
	Figma,
	Flickr,
	Gist,
	Instagram,
	Lbry,
	LinkedInBadge,
	Pin,
	PinterestBoard,
	PinterestFollowButton,
	Replit,
	SimplecastEpisode,
	Snack,
	SoundCloud,
	Spotify,
	TikTok,
	Twitch,
	Tweet,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterList,
	TwitterMentionButton,
	TwitterTimeline,
	Vimeo,
	Whimsical,
	Wikipedia,
	Wistia,
	YouTube,
}
