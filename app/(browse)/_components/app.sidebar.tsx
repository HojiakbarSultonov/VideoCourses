'use client'

import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel,  SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Braces, Bug, CircleGauge, GitCompareArrows, Github, Home, Instagram, Linkedin, Rss, Send, Terminal, UserPen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

function AppSidebar() {
    const pathname =usePathname()
  return (
   <Sidebar variant='floating' collapsible='icon'>
      <SidebarContent>
        <SidebarGroup >
            <SidebarGroupLabel>Pages</SidebarGroupLabel>
            <SidebarContent>
                <SidebarMenu>
                    {navbar_items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={pathname===item.href}>
                                <Link href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                </Link>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
        <SidebarGroup >
            <SidebarGroupLabel>Startups</SidebarGroupLabel>
            <SidebarContent>
                <SidebarMenu>
                    {startup_items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={pathname===item.href}>
                                <Link href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                </Link>

                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
                    <SidebarMenu className="flex items-center border-t group-data-[collapsible=icon]:hidden">
                        <div className="flex items-center gap-x-2 pt-2">
                            {social_items.map((item)=>(
                                <Button variant="ghost" size="icon"  className="size-7" key={item.title} onClick={()=>{window.open(item.href,'_blank')}}>
                                    <item.icon /></Button>
                           )) }
                        </div>
                    </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar

const navbar_items=[
    {
        title:'Home',
        href:'/',
        icon:Home
    },
    {
        title:'Courses',
        href:'/courses',
        icon:Braces
    },
    {
        title:'Projects',
        href:'/projects',
        icon:Terminal
    },
    {
        title:'Sources codes',
        href:'/source-codes',
        icon:Bug
    },
    {
        title:'Dashboard',
        href:'/dashboard',
        icon:CircleGauge
    },
]

const startup_items=[
    {
        title:'Blogs',
        href:'/blogs',
        icon:Rss
    },
    {
        title:'Resume builder',
        href:'/resume-builder',
        icon:UserPen
    },
    {
        title:'Beautify code',
        href:'/beautify-code',
        icon:GitCompareArrows
    },
]
const social_items=[
    {
        title:'Telegram',
        href:'https://t.me/HSRasul',
        icon:Send
    },
    {
        title:'Instagram',
        href:'https://www.instagram.com/?next=%2F/',
        icon:Instagram
    },
    {
        title:'LinkedIn',
        href:'https://www.linkedin.com/in/hojiakbar-sultonov/',
        icon:Linkedin
    },
    {
        title:'GitHub',
        href:'https://github.com/HojiakbarSultonov',
        icon:Github
    },
]